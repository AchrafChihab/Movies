import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSimilarComponent } from './tv-similar.component';

describe('TvSimilarComponent', () => {
  let component: TvSimilarComponent;
  let fixture: ComponentFixture<TvSimilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvSimilarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvSimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
