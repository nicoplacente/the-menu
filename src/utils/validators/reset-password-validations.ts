import { IsNotEmpty, MinLength, validate } from "class-validator";
import { plainToInstance } from "class-transformer";

export class ResetPasswordDto {
  @MinLength(6, { message: "La contraseña debe tener al menos 6 caracteres" })
  @IsNotEmpty({ message: "El campo contraseña es obligatorio" })
  password!: string;

  @MinLength(6, { message: "La contraseña debe tener al menos 6 caracteres" })
  @IsNotEmpty({ message: "El campo contraseña es obligatorio" })
  passwordConfirm!: string;
}

export const validateResetPassword = async (data: any) => {
  const resetPasswordDto = plainToInstance(ResetPasswordDto, data);
  const errors = await validate(resetPasswordDto);

  if (errors.length > 0) {
    return errors.reduce((acc: any, error) => {
      acc[error.property] = Object.values(error.constraints || {}).join(", ");
      return acc;
    }, {});
  }

  return null;
};
