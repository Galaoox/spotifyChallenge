import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeAlertaComponent } from './mensaje-alerta.component';

describe('MensajeAlertaComponent', () => {
  let component: MensajeAlertaComponent;
  let fixture: ComponentFixture<MensajeAlertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeAlertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
