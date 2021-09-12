import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AleatoriosComponent } from './aleatorios.component';

describe('AleatoriosComponent', () => {
  let component: AleatoriosComponent;
  let fixture: ComponentFixture<AleatoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AleatoriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AleatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
