import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoresComponent } from './lores.component';

describe('LoresComponent', () => {
  let component: LoresComponent;
  let fixture: ComponentFixture<LoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
