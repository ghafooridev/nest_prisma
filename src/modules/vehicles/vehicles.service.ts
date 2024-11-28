import { Injectable, HttpStatus, Logger } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { Vehicle } from '@prisma/client';


@Injectable()
export class VehiclesService {
  constructor(private readonly prisma: PrismaService) { }

  private readonly logger = new Logger("vehicle service");

  async findAll(): Promise<Vehicle[]> {
    this.logger.log('find all');
    const vehicles = await this.prisma.vehicle.findMany();
    return vehicles;
  }

  async findOne(id: string): Promise<Vehicle> {
    this.logger.log(`find ${id}`);
    const vehicle = await this.prisma.vehicle.findFirst({ where: { id } });
    return vehicle;
  }

  async create(data: Vehicle): Promise<Vehicle> {
    this.logger.log(`create vehicle`);
    const newVehicle = await this.prisma.vehicle.create({ data });
    return newVehicle;
  }

  async update(id: string, data: Vehicle): Promise<Vehicle> {
    this.logger.log(`update vehicle`);
    const updatedVehicle = await this.prisma.vehicle.update({
      where: { id },
      data
    });
    return updatedVehicle;
  }

  async remove(id: string): Promise<string> {
    this.logger.log(`delete vehicle`);
    const deletedVehicle = await this.prisma.vehicle.delete({
      where: { id },
    });
    return deletedVehicle.id;
  }
}
