import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesdestacadosComponent } from './clientesdestacados.component';

describe('ClientesdestacadosComponent', () => {
  let component: ClientesdestacadosComponent;
  let fixture: ComponentFixture<ClientesdestacadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesdestacadosComponent]
    });
    fixture = TestBed.createComponent(ClientesdestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
