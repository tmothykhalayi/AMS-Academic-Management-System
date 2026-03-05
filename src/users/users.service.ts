import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, Student, Admin } from './entities/user.entity';
import { UserRole, AdminRole } from '../Enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    let user: Student | Admin;
    if (createUserDto.role === UserRole.STUDENT) {
      const studentCount = await this.userRepository.count({
        where: { role: UserRole.STUDENT },
      });
      const studentId = `GSS-${new Date().getFullYear()}-${String(studentCount + 1).padStart(3, '0')}`;

      user = new Student();
      user.email = createUserDto.email;
      user.password = hashedPassword;
      user.firstName = createUserDto.firstName;
      user.lastName = createUserDto.lastName;
      if (createUserDto.phone) user.phone = createUserDto.phone;
      if (createUserDto.address) user.address = createUserDto.address;
      user.role = createUserDto.role;
      user.studentId = studentId;
    } else if (createUserDto.role === UserRole.ADMIN) {
      const adminCount = await this.userRepository.count({
        where: { role: UserRole.ADMIN },
      });
      const employeeId = `EMP-${new Date().getFullYear()}-${String(adminCount + 1).padStart(3, '0')}`;

      user = new Admin();
      user.email = createUserDto.email;
      user.password = hashedPassword;
      user.firstName = createUserDto.firstName;
      user.lastName = createUserDto.lastName;
      if (createUserDto.phone) user.phone = createUserDto.phone;
      if (createUserDto.address) user.address = createUserDto.address;
      user.role = createUserDto.role;
      user.employeeId = employeeId;
      user.adminRole = AdminRole.STAFF;
    } else {
      throw new Error('Invalid user role');
    }

    return await this.userRepository.save(user);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { email } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
