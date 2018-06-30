import { AdvertsModule } from './adverts.module';

describe('AdvertsModule', () => {
  let advertsModule: AdvertsModule;

  beforeEach(() => {
    advertsModule = new AdvertsModule();
  });

  it('should create an instance', () => {
    expect(advertsModule).toBeTruthy();
  });
});
