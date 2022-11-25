import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriListComponent } from './galeri-list.component';

describe('GaleriListComponent', () => {
  let component: GaleriListComponent;
  let fixture: ComponentFixture<GaleriListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
