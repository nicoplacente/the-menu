import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  Matches,
  IsBoolean,
  validate,
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";
import { plainToInstance } from "class-transformer";

export class RegisterDto {
  @IsNotEmpty({ message: "El nombre completo es obligatorio" })
  @Matches(/^[a-zA-Z\s]+$/, {
    message: "El nombre solo puede contener letras y espacios",
  })
  name!: string;

  @IsNotEmpty({ message: "El teléfono es obligatorio" })
  @Matches(/^[0-9]+$/, { message: "El teléfono debe contener solo números" })
  phone!: string;

  @IsEmail({}, { message: "Por favor ingresa un correo electrónico válido" })
  @IsNotEmpty({ message: "El correo electrónico es obligatorio" })
  email!: string;

  @MinLength(6, { message: "La contraseña debe tener al menos 6 caracteres" })
  @IsNotEmpty({ message: "La contraseña es obligatoria" })
  password!: string;

  @IsBoolean({ message: "Debes aceptar los términos y condiciones" })
  @IsNotEmpty({ message: "Debes aceptar los términos y condiciones" })
  @IsTrue({ message: "Debes aceptar los términos y condiciones" })
  terms!: boolean;
}

export function IsTrue(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isTrue",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return value === true;
        },
        defaultMessage(args: ValidationArguments) {
          return "El valor debe ser verdadero.";
        },
      },
    });
  };
}

export const validateRegister = async (data: any) => {
  const registerDto = plainToInstance(RegisterDto, data);
  const errors = await validate(registerDto);

  if (errors.length > 0) {
    return errors.reduce((acc: any, error) => {
      acc[error.property] = Object.values(error.constraints || {}).join(", ");
      return acc;
    }, {});
  }

  return null;
};
