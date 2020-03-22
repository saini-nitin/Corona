import { InfoDialogRoutingModule } from './info-dialog-routing.module';

describe('InfoDialogRoutingModule', () => {
  let infoDialogRoutingModule: InfoDialogRoutingModule;

  beforeEach(() => {
    infoDialogRoutingModule = new InfoDialogRoutingModule();
  });

  it('should create an instance', () => {
    expect(infoDialogRoutingModule).toBeTruthy();
  });
});
