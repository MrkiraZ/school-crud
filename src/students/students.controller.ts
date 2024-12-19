import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.createStudents(createStudentDto);
  }

  @Get()
  async findAll() {
    return this.studentsService.studentsList({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const student = await this.studentsService.Student({ id: id });
    if (!student) throw new NotFoundException('Student not found');
    return this.studentsService.Student({ id: id });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    const student = await this.studentsService.Student({ id: id });
    if (!student) throw new NotFoundException('Student not found');
    return this.studentsService.updateStudents(id, updateStudentDto, {
      where: { id: id },
      data: updateStudentDto,
    });
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const student = await this.studentsService.Student({ id: id });
    if (!student) throw new NotFoundException('Student not found');
    await this.studentsService.deleteStudents({ id: id });
  }
}
