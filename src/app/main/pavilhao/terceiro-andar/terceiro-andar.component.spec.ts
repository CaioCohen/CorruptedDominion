import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiroAndarComponent } from './terceiro-andar.component';

describe('TerceiroAndarComponent', () => {
  let component: TerceiroAndarComponent;
  let fixture: ComponentFixture<TerceiroAndarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerceiroAndarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceiroAndarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
