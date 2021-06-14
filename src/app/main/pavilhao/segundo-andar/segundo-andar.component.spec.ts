import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoAndarComponent } from './segundo-andar.component';

describe('SegundoAndarComponent', () => {
  let component: SegundoAndarComponent;
  let fixture: ComponentFixture<SegundoAndarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoAndarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoAndarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
