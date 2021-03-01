import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ExportModule } from "export-nest-tut"
@Module({
  imports: [ExportModule],
  controllers: [AppController],
})
export class AppModule {}
