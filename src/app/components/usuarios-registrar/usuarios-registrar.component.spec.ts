import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosRegistrarComponent } from './usuarios-registrar.component';

describe('UsuariosRegistrarComponent', () => {
  let component: UsuariosRegistrarComponent;
  let fixture: ComponentFixture<UsuariosRegistrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosRegistrarComponent]
    });
    fixture = TestBed.createComponent(UsuariosRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
