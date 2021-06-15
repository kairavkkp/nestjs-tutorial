import { Test, TestingModule } from '@nestjs/testing';
import { APIController } from './api.controller';
import { APIService } from './api.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [APIController],
      providers: [APIService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<APIController>(APIController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
