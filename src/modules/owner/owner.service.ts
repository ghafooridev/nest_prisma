import { HttpStatus, Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "../../modules/prisma/prisma.service";
import { GetOwnerDto, UpdateOwnerDto, CreateOwnerDto } from "./dto";
import { plainToInstance } from "class-transformer";
import { createCustomError } from "src/common/errors/customError";

@Injectable()
export class OwnerService {
  constructor(private readonly prisma: PrismaService) { }

  private logger = new Logger("Owner service");


  async findAll(): Promise<GetOwnerDto[]> {
    this.logger.log("owner by Id");
    const owners = await this.prisma.owner.findMany();
    return plainToInstance(GetOwnerDto, owners);
  }


  async findOne(
    id: string
  ): Promise<GetOwnerDto> {
    this.logger.log("Owner by Id");
    try {
      const owner = await this.prisma.owner.findUnique({
        where: { id },
      });
      if (!owner) {
        throw createCustomError("Owner not found", HttpStatus.NOT_FOUND);
      }
      return plainToInstance(GetOwnerDto, owner);
    } catch (e) {
      throw createCustomError(
        e.message || "Something went wrong",
        e.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async create(data: CreateOwnerDto): Promise<CreateOwnerDto> {
    this.logger.log("createUser");
    try {
      const owner = await this.prisma.owner.create({
        data,
      });
      return owner;
    } catch (e) {
      throw createCustomError(
        e.message || "Something went wrong",
        e.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(
    id: string,
    data: UpdateOwnerDto
  ): Promise<UpdateOwnerDto> {
    this.logger.log("update Owner");
    try {
      const updateOwner = await this.prisma.owner.update({
        where: { id },
        data,
      });
      return updateOwner;
    } catch (e) {
      throw createCustomError(
        e.message || "Something went wrong",
        e.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async remove(id: string): Promise<string> {
    this.logger.log("delete owner");
    try {
      const deleteOwner = await this.prisma.owner.delete({
        where: { id }
      });
      return deleteOwner.id;
    } catch (e) {
      throw createCustomError(
        e.message || "Something went wrong",
        e.status || HttpStatus.BAD_REQUEST,
      );
    }
  }
}