import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionDiscografiaComponent } from './informacion-discografia.component';

describe('InformacionDiscografiaComponent', () => {
  let component: InformacionDiscografiaComponent;
  let fixture: ComponentFixture<InformacionDiscografiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionDiscografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionDiscografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
