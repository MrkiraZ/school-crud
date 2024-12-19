import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Students, Prisma } from '@prisma/client';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  async Student(
    userWhereUniqueInput: Prisma.StudentsWhereUniqueInput,
  ): Promise<Students | null> {
    return this.prisma.students.findUnique({
      where: userWhereUniqueInput,
    });
  }
  async students(
    studentsWhereUniqueInput: Prisma.StudentsWhereUniqueInput,
  ): Promise<Students | null> {
    return this.prisma.students.findUnique({
      where: studentsWhereUniqueInput,
    });
  }

  async studentsList(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.StudentsWhereUniqueInput;
    where?: Prisma.StudentsWhereInput;
    orderBy?: Prisma.StudentsOrderByWithRelationInput;
  }): Promise<Students[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.students.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createStudents(data: Prisma.StudentsCreateInput): Promise<Students> {
    return this.prisma.students.create({
      data,
    });
  }

  async updateStudents(
    id: string,
    updateStudentDto: UpdateStudentDto,
    params?: {
      where: Prisma.StudentsWhereUniqueInput;
      data: Prisma.StudentsUpdateInput;
    },
  ): Promise<Students> {
    const { where, data } = params;
    return this.prisma.students.update({
      data,
      where,
    });
  }

  async deleteStudents(
    where: Prisma.StudentsWhereUniqueInput,
  ): Promise<Students> {
    return this.prisma.students.delete({
      where,
    });
  }
}
