import { IsEmail, IsNotEmpty, MinLength, validate } from "class-validator";
import { plainToInstance } from "class-transformer";

export class LoginDto {
  @IsEmail({}, { message: "Por favor ingresa un correo electrónico válido" })
  @IsNotEmpty({ message: "El campo email es obligatorio" })
  email!: string;

  @MinLength(6, { message: "La contraseña debe tener al menos 6 caracteres" })
  @IsNotEmpty({ message: "El campo contraseña es obligatorio" })
  password!: string;
}

export const validateLogin = async (data: any) => {
  const loginDto = plainToInstance(LoginDto, data);
  const errors = await validate(loginDto);

  if (errors.length > 0) {
    return errors.reduce((acc: any, error) => {
      acc[error.property] = Object.values(error.constraints || {}).join(", ");
      return acc;
    }, {});
  }

  return null;
};
