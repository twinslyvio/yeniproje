import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriKonvoyEkleComponent } from './galeri-konvoy-ekle.component';

describe('GaleriKonvoyEkleComponent', () => {
  let component: GaleriKonvoyEkleComponent;
  let fixture: ComponentFixture<GaleriKonvoyEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriKonvoyEkleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriKonvoyEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
