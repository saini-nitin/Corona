import { CreateCandidateModule } from './create-candidate.module';

describe('CreateCandidateModule', () => {
  let createCandidateModule: CreateCandidateModule;

  beforeEach(() => {
    createCandidateModule = new CreateCandidateModule();
  });

  it('should create an instance', () => {
    expect(createCandidateModule).toBeTruthy();
  });
});
