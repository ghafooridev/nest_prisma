import { PartialType } from "@nestjs/mapped-types";
import { IsDefined, IsString } from "class-validator";
import { CreateOwnerDto } from "./createOwner.dto";

export class UpdateOwnerDto extends PartialType(CreateOwnerDto) {
  @IsDefined()
  @IsString()
  readonly id: string;
}