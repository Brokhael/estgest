import { Test, TestingModule } from '@nestjs/testing';
import { BusinessHoursExceptionService } from './business-hours-exception.service';

describe('BusinessHoursExceptionService', () => {
  let service: BusinessHoursExceptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinessHoursExceptionService],
    }).compile();

    service = module.get<BusinessHoursExceptionService>(BusinessHoursExceptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
