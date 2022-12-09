import { Controller, Get } from '@nestjs/common';

@Controller('profile')
export class ProfileController {
  @Get()
  getHello(): string {
    return 'upp!';
  }
}
