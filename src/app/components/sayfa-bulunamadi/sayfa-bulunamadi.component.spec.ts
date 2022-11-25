import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayfaBulunamadiComponent } from './sayfa-bulunamadi.component';

describe('SayfaBulunamadiComponent', () => {
  let component: SayfaBulunamadiComponent;
  let fixture: ComponentFixture<SayfaBulunamadiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SayfaBulunamadiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SayfaBulunamadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
