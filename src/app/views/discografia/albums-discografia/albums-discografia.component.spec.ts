import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsDiscografiaComponent } from './albums-discografia.component';

describe('AlbumsDiscografiaComponent', () => {
  let component: AlbumsDiscografiaComponent;
  let fixture: ComponentFixture<AlbumsDiscografiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsDiscografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsDiscografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
