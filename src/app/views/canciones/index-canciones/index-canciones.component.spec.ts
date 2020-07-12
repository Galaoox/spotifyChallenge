import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCancionesComponent } from './index-canciones.component';

describe('IndexCancionesComponent', () => {
  let component: IndexCancionesComponent;
  let fixture: ComponentFixture<IndexCancionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexCancionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
