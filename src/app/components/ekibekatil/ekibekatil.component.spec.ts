import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkibekatilComponent } from './ekibekatil.component';

describe('EkibekatilComponent', () => {
  let component: EkibekatilComponent;
  let fixture: ComponentFixture<EkibekatilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkibekatilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EkibekatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
