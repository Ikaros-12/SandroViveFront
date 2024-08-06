import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmempleadosComponent } from './abmempleados.component';

describe('AbmempleadosComponent', () => {
  let component: AbmempleadosComponent;
  let fixture: ComponentFixture<AbmempleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbmempleadosComponent]
    });
    fixture = TestBed.createComponent(AbmempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
