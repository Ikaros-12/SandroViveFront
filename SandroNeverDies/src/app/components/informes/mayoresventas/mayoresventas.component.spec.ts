import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayoresventasComponent } from './mayoresventas.component';

describe('MayoresventasComponent', () => {
  let component: MayoresventasComponent;
  let fixture: ComponentFixture<MayoresventasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MayoresventasComponent]
    });
    fixture = TestBed.createComponent(MayoresventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
