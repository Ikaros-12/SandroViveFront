import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmcategoriasComponent } from './abmcategorias.component';

describe('AbmcategoriasComponent', () => {
  let component: AbmcategoriasComponent;
  let fixture: ComponentFixture<AbmcategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbmcategoriasComponent]
    });
    fixture = TestBed.createComponent(AbmcategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
