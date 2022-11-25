import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyuruEkleComponent } from './duyuru-ekle.component';

describe('DuyuruEkleComponent', () => {
  let component: DuyuruEkleComponent;
  let fixture: ComponentFixture<DuyuruEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuyuruEkleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuyuruEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
