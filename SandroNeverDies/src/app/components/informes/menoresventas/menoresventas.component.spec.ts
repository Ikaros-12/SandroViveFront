import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenoresventasComponent } from './menoresventas.component';

describe('MenoresventasComponent', () => {
  let component: MenoresventasComponent;
  let fixture: ComponentFixture<MenoresventasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenoresventasComponent]
    });
    fixture = TestBed.createComponent(MenoresventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
