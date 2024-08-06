import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmproductosComponent } from './abmproductos.component';

describe('AbmproductosComponent', () => {
  let component: AbmproductosComponent;
  let fixture: ComponentFixture<AbmproductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbmproductosComponent]
    });
    fixture = TestBed.createComponent(AbmproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
