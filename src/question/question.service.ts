import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './entities/question.entity';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Survey } from 'src/survey/entities/survey.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private repo: Repository<Question>,

    @InjectRepository(Survey)
    private surveyRepo: Repository<Survey>,
  ) {}

  async create(dto: CreateQuestionDto) {
    const survey = await this.surveyRepo.findOne({ where: { id: dto.surveyId } });
    if (!survey) throw new NotFoundException('Survey not found');

    const question = this.repo.create({
      text: dto.text,
      type: dto.type,
      survey,
    });

    return this.repo.save(question);
  }

  findAll() {
    return this.repo.find({ relations: ['survey', 'answers'] });
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: { id },
      relations: ['survey', 'answers'],
    });
  }

  async update(id: number, dto: UpdateQuestionDto) {
    const question = await this.repo.preload({ id, ...dto });
    if (!question) throw new NotFoundException('Question not found');
    return this.repo.save(question);
  }

  // async remove(id: number) {
  //   const question = await this.findOne(id);
  //   return this.repo.remove(question);
  // }
}
