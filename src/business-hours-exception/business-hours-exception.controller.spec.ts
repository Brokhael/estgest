import { Test, TestingModule } from '@nestjs/testing';
import { BusinessHoursExceptionController } from './business-hours-exception.controller';
import { BusinessHoursExceptionService } from './business-hours-exception.service';

describe('BusinessHoursExceptionController', () => {
  let controller: BusinessHoursExceptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessHoursExceptionController],
      providers: [BusinessHoursExceptionService],
    }).compile();

    controller = module.get<BusinessHoursExceptionController>(BusinessHoursExceptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
