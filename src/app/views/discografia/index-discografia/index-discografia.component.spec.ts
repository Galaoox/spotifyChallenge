import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDiscografiaComponent } from './index-discografia.component';

describe('IndexDiscografiaComponent', () => {
  let component: IndexDiscografiaComponent;
  let fixture: ComponentFixture<IndexDiscografiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexDiscografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexDiscografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
