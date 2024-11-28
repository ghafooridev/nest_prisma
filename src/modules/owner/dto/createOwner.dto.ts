import { IsNotEmpty } from "class-validator";

export class CreateOwnerDto {
  @IsNotEmpty({ message: "name is required" })
  name: string;
}