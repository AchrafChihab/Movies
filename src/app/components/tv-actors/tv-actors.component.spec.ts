import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvActorsComponent } from './tv-actors.component';

describe('TvActorsComponent', () => {
  let component: TvActorsComponent;
  let fixture: ComponentFixture<TvActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvActorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
