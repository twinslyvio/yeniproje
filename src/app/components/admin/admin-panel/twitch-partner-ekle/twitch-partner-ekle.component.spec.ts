import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchPartnerEkleComponent } from './twitch-partner-ekle.component';

describe('TwitchPartnerEkleComponent', () => {
  let component: TwitchPartnerEkleComponent;
  let fixture: ComponentFixture<TwitchPartnerEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitchPartnerEkleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitchPartnerEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
