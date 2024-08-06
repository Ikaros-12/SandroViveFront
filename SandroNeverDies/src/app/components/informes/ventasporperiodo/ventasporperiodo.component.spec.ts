import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasporperiodoComponent } from './ventasporperiodo.component';

describe('VentasporperiodoComponent', () => {
  let component: VentasporperiodoComponent;
  let fixture: ComponentFixture<VentasporperiodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasporperiodoComponent]
    });
    fixture = TestBed.createComponent(VentasporperiodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
