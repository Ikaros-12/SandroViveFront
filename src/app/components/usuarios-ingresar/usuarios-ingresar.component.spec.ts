import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosIngresarComponent } from './usuarios-ingresar.component';

describe('UsuariosIngresarComponent', () => {
  let component: UsuariosIngresarComponent;
  let fixture: ComponentFixture<UsuariosIngresarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosIngresarComponent]
    });
    fixture = TestBed.createComponent(UsuariosIngresarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
