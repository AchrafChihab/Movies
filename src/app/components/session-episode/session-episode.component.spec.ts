import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionEpisodeComponent } from './session-episode.component';

describe('SessionEpisodeComponent', () => {
  let component: SessionEpisodeComponent;
  let fixture: ComponentFixture<SessionEpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionEpisodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
