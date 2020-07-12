import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexArtistasComponent } from './index-artistas.component';

describe('IndexArtistasComponent', () => {
  let component: IndexArtistasComponent;
  let fixture: ComponentFixture<IndexArtistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexArtistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexArtistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
