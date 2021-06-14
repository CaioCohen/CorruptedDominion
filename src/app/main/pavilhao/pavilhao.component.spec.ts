import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PavilhaoComponent } from './pavilhao.component';

describe('PavilhaoComponent', () => {
  let component: PavilhaoComponent;
  let fixture: ComponentFixture<PavilhaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PavilhaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PavilhaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
