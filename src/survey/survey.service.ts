import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Survey } from './entities/survey.entity';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(Survey)
    private repo: Repository<Survey>,

    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(dto: CreateSurveyDto) {
    const user = await this.userRepo.findOne({ where: { id: dto.userId } });
    if (!user) throw new NotFoundException('User not found');

    const survey = this.repo.create({
      title: dto.title,
      description: dto.description,
      user,
    });

    return this.repo.save(survey);
  }

  findAll() {
    return this.repo.find({
      relations: ['user', 'questions', 'responses'],
    });
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: { id },
      relations: ['user', 'questions', 'responses'],
    });
  }

  async update(id: number, dto: UpdateSurveyDto) {
    const survey = await this.repo.preload({ id, ...dto });
    if (!survey) throw new NotFoundException('Survey not found');

    return this.repo.save(survey);
  }

  // async remove(id: number) {
  //   const survey = await this.findOne(id);
  //   return this.repo.remove(survey);
  // }
}
