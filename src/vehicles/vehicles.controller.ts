import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { VehicleService } from './vehicles.service';
import { Vehicle } from './vehicle.entity';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get()
  async findAll(): Promise<Vehicle[]> {
    return this.vehicleService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Vehicle> {
    return this.vehicleService.findById(+id);
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
    return this.vehicleService.update(+id, vehicle);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.vehicleService.remove(+id);
  }
}
