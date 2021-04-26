import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbexCatalogComponent } from './ibex-catalog.component';

describe('IbexCatalogComponent', () => {
  let component: IbexCatalogComponent;
  let fixture: ComponentFixture<IbexCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IbexCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IbexCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
