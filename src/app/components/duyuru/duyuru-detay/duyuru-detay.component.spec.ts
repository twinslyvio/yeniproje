import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyuruDetayComponent } from './duyuru-detay.component';

describe('DuyuruDetayComponent', () => {
  let component: DuyuruDetayComponent;
  let fixture: ComponentFixture<DuyuruDetayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuyuruDetayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuyuruDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
