import { PopUpRoutingModule } from './pop-up-routing.module';

describe('PopUpRoutingModule', () => {
  let popUpRoutingModule: PopUpRoutingModule;

  beforeEach(() => {
    popUpRoutingModule = new PopUpRoutingModule();
  });

  it('should create an instance', () => {
    expect(popUpRoutingModule).toBeTruthy();
  });
});
