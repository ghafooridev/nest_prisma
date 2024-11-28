import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { Vehicle } from '@prisma/client';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehicleService: VehiclesService) { }

  @Get()
  async findAll(): Promise<Vehicle[]> {
    return this.vehicleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Vehicle> {
    return this.vehicleService.findOne(id);
  }

  @Post()
  async create(@Body() vehicle: Vehicle): Promise<Vehicle> {
    return this.vehicleService.create(vehicle);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() vehicle: Vehicle,
  ): Promise<Vehicle> {
    return this.vehicleService.update(id, vehicle);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    return this.vehicleService.remove(id);
  }
}
