import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingMensajeComponent } from './binding-mensaje.component';

describe('BindingMensajeComponent', () => {
  let component: BindingMensajeComponent;
  let fixture: ComponentFixture<BindingMensajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingMensajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
