import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexLanzamientosComponent } from './index-lanzamientos.component';

describe('IndexLanzamientosComponent', () => {
  let component: IndexLanzamientosComponent;
  let fixture: ComponentFixture<IndexLanzamientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexLanzamientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexLanzamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
