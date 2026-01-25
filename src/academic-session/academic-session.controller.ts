import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcademicSessionService } from './academic-session.service';
import { CreateAcademicSessionDto } from './dto/create-academic-session.dto';
import { UpdateAcademicSessionDto } from './dto/update-academic-session.dto';

@Controller('academic-session')
export class AcademicSessionController {
  constructor(private readonly academicSessionService: AcademicSessionService) {}

  @Post()
  create(@Body() createAcademicSessionDto: CreateAcademicSessionDto) {
    return this.academicSessionService.create(createAcademicSessionDto);
  }

  @Get()
  findAll() {
    return this.academicSessionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.academicSessionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcademicSessionDto: UpdateAcademicSessionDto) {
    return this.academicSessionService.update(+id, updateAcademicSessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.academicSessionService.remove(+id);
  }
}
