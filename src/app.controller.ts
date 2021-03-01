import { Controller, Get } from '@nestjs/common';
import { ExportModule } from 'export-nest-tut'
import { GreetService } from 'export-nest-tut'

@Controller()
export class AppController {
  constructor(private greetService: GreetService) {}

  @Get()
  getHello(){
    this.greetService.greet();
  }
}
