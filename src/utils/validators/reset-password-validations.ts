import {
  IsNotEmpty,
  MinLength,
  validate,
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from "class-validator";
import { plainToInstance } from "class-transformer";

export class ResetPasswordDto {
  @MinLength(6, { message: "La contraseña debe tener al menos 6 caracteres" })
  @IsNotEmpty({ message: "El campo contraseña es obligatorio" })
  password!: string;

  @MinLength(6, { message: "La contraseña debe tener al menos 6 caracteres" })
  @IsNotEmpty({ message: "El campo confirmar contraseña es obligatorio" })
  @Match("password", { message: "Las contraseñas deben ser iguales" })
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

export function Match(property: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "Match",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [property],
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          return value === relatedValue;
        },
        defaultMessage(args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          return `${propertyName} y ${relatedPropertyName} deben ser iguales`;
        },
      },
    });
  };
}
