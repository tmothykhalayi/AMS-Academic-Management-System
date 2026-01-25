import { Injectable } from '@nestjs/common';
import { CreateAcademicSessionDto } from './dto/create-academic-session.dto';
import { UpdateAcademicSessionDto } from './dto/update-academic-session.dto';

@Injectable()
export class AcademicSessionService {
  create(createAcademicSessionDto: CreateAcademicSessionDto) {
    return 'This action adds a new academicSession';
  }

  findAll() {
    return `This action returns all academicSession`;
  }

  findOne(id: number) {
    return `This action returns a #${id} academicSession`;
  }

  update(id: number, updateAcademicSessionDto: UpdateAcademicSessionDto) {
    return `This action updates a #${id} academicSession`;
  }

  remove(id: number) {
    return `This action removes a #${id} academicSession`;
  }
}
