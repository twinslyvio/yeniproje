import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyuruComponent } from './duyuru.component';

describe('DuyuruComponent', () => {
  let component: DuyuruComponent;
  let fixture: ComponentFixture<DuyuruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuyuruComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuyuruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
