import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistasRelacionadosDiscografiaComponent } from './artistas-relacionados-discografia.component';

describe('ArtistasRelacionadosDiscografiaComponent', () => {
  let component: ArtistasRelacionadosDiscografiaComponent;
  let fixture: ComponentFixture<ArtistasRelacionadosDiscografiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistasRelacionadosDiscografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistasRelacionadosDiscografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
