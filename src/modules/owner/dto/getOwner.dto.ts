import { Expose } from "class-transformer";
import { AbstractDto } from "src/common/dto/abstractDto";

export class GetOwnerDto extends AbstractDto {
  @Expose()
  email: string;

  @Expose()
  name: string;
}