import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimariosComponent } from './primarios.component';

describe('PrimariosComponent', () => {
  let component: PrimariosComponent;
  let fixture: ComponentFixture<PrimariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
