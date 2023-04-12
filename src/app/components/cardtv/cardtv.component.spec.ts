import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtvComponent } from './cardtv.component';

describe('CardtvComponent', () => {
  let component: CardtvComponent;
  let fixture: ComponentFixture<CardtvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardtvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
