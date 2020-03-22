import { PopUpModule } from './pop-up.module';

describe('PopUpModule', () => {
  let popUpModule: PopUpModule;

  beforeEach(() => {
    popUpModule = new PopUpModule();
  });

  it('should create an instance', () => {
    expect(popUpModule).toBeTruthy();
  });
});
