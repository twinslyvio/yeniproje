import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriDetayComponent } from './galeri-detay.component';

describe('GaleriDetayComponent', () => {
  let component: GaleriDetayComponent;
  let fixture: ComponentFixture<GaleriDetayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriDetayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
