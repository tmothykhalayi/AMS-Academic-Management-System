import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Response } from './entities/response.entity';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';
import { Survey } from 'src/survey/entities/survey.entity';
import { Question } from 'src/question/entities/question.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class ResponseService {
  constructor(
    @InjectRepository(Response)
    private repo: Repository<Response>,

    @InjectRepository(Survey)
    private surveyRepo: Repository<Survey>,

    @InjectRepository(Question)
    private questionRepo: Repository<Question>,

    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(dto: CreateResponseDto) {
    const survey = await this.surveyRepo.findOne({ where: { id: dto.surveyId } });
    const question = await this.questionRepo.findOne({ where: { id: dto.questionId } });
    const user = await this.userRepo.findOne({ where: { id: dto.userId } });

    if (!survey) throw new NotFoundException('Survey not found');
    if (!question) throw new NotFoundException('Question not found');
    if (!user) throw new NotFoundException('User not found');

    const response = this.repo.create({
      answer: dto.answer,
      survey,
      question,
      user,
    });

    return this.repo.save(response);
  }

  findAll() {
    return this.repo.find({
      relations: ['survey', 'question', 'user'],
    });
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: { id },
      relations: ['survey', 'question', 'user'],
    });
  }

  async update(id: number, dto: UpdateResponseDto) {
    const response = await this.repo.preload({ id, ...dto });
    if (!response) throw new NotFoundException('Response not found');
    return this.repo.save(response);
  }

  // async remove(id: number) {
  //   const response = await this.findOne(id);
  //   return this.repo.remove(response);
  // }
}
