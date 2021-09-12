import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecundariosComponent } from './secundarios.component';

describe('SecundariosComponent', () => {
  let component: SecundariosComponent;
  let fixture: ComponentFixture<SecundariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecundariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecundariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
