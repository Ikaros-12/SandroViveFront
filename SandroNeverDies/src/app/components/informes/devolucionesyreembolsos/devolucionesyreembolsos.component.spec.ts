import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucionesyreembolsosComponent } from './devolucionesyreembolsos.component';

describe('DevolucionesyreembolsosComponent', () => {
  let component: DevolucionesyreembolsosComponent;
  let fixture: ComponentFixture<DevolucionesyreembolsosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevolucionesyreembolsosComponent]
    });
    fixture = TestBed.createComponent(DevolucionesyreembolsosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
