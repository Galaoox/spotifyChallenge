import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionesPopularesDiscografiaComponent } from './canciones-populares-discografia.component';

describe('CancionesPopularesDiscografiaComponent', () => {
  let component: CancionesPopularesDiscografiaComponent;
  let fixture: ComponentFixture<CancionesPopularesDiscografiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancionesPopularesDiscografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionesPopularesDiscografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
