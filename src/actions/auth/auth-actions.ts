"use server";

import { signIn } from "@/libs/auth";
import bcrypt from "bcryptjs";
import db from "@/libs/prisma";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { RegisterDto } from "@/utils/validators/register-validations";

interface LoginData {
  email: string;
  password: string;
}

export const LoginAction = async (data: LoginData) => {
  try {
    const { email, password } = data;
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (response?.error) {
      return { success: false, error: response.error };
    }
    return { success: true };
  } catch (error) {
    return { error: "Error en la autenticación" };
  }
};

export const registerAction = async (values: any) => {
  try {
    const registerDto = plainToInstance(RegisterDto, values);
    const validationErrors = await validate(registerDto);
    if (validationErrors.length > 0) {
      return {
        error: validationErrors
          .map((err) => Object.values(err.constraints || {}))
          .join(", "),
      };
    }

    const user = await db.user.findUnique({
      where: {
        email: registerDto.email,
      },
      include: {
        accounts: true,
      },
    });

    if (user) {
      const oauthAccounts = user.accounts.filter(
        (account) => account.type === "oauth"
      );
      if (oauthAccounts.length > 0) {
        return {
          error:
            "To confirm your identity, sign in with the same account you used originally.",
        };
      }
      return {
        error: "User already exists",
      };
    }

    const passwordHash = await bcrypt.hash(registerDto.password, 10);

    await db.user.create({
      data: {
        email: registerDto.email,
        name: registerDto.name,
        password: passwordHash,
        phone: registerDto.phone,
      },
    });

    return { success: true };
  } catch (error) {
    return { error: "error 500" };
  }
};
