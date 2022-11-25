import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchDetayComponent } from './twitch-detay.component';

describe('TwitchDetayComponent', () => {
  let component: TwitchDetayComponent;
  let fixture: ComponentFixture<TwitchDetayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitchDetayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitchDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
