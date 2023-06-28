import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class StudentsService {
  private readonly logger = new Logger('StudentsService');

  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    try {
      const student = this.studentRepository.create({
        ...createStudentDto,
      });
      await this.studentRepository.save(student);
      return student;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit, offset } = paginationDto;
    const sudents = await this.studentRepository.find({
      take: limit,
      skip: offset,
      order: {
        id: 'ASC',
      },
    });
    const count = await this.studentRepository.count();
    return {
      count: count,
      result: [...sudents],
    };
  }

  async findOne(id: number) {
    const student = await this.studentRepository.findOneBy({ id });
    if (!student)
      throw new NotFoundException(`Student with id ${id} doesn't exist`);
    return student;
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const student = await this.studentRepository.preload({
      id,
      ...updateStudentDto,
    });

    if (!student)
      throw new BadRequestException(`Student with id ${id} doesn't exist`);

    const newStudent = this.studentRepository.save(student);

    return newStudent;
  }

  async remove(id: number) {
    const student = await this.studentRepository.findOneBy({ id });
    if (!student)
      throw new BadRequestException(`Student with id ${id} doesn't exist`);
    return this.studentRepository.remove(student);
  }
}
