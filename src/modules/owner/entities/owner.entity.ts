import { Owner as PrismaOwner, Vehicle as VehiclePrisma } from '@prisma/client';

export class Owner implements PrismaOwner {
  id: string;
  name: string | null;
  vehicle: VehiclePrisma[] = [];
  createdAt: Date;
  updatedAt: Date;

  constructor(owner: Partial<Owner>) {
    Object.assign(this, owner);
  }

  getFullName(): string {
    return this.name || 'Unknown Owner';
  }
}