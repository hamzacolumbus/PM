import { Module } from '@nestjs/common';
import { ProjectService } from './bp.service';
import { ProjectController } from './bp.controller';

@Module({
    controllers: [ProjectController],
    providers: [ProjectService],
  })
  
export class ProjectModule {}
