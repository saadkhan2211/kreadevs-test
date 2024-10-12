import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { TeacherService } from './teacher/teacher.service';
import { TeacherController } from './teacher/teacher.controller';
import { TeacherModule } from './teacher/teacher.module';
import { CourseModule } from './course/course.module';
import { ResultService } from './result/result.service';
import { MoController } from './result/mo/mo.controller';

@Module({
  imports: [StudentsModule, TeacherModule, CourseModule],
  controllers: [AppController, TeacherController, MoController],
  providers: [AppService, TeacherService, ResultService],
})
export class AppModule {}
