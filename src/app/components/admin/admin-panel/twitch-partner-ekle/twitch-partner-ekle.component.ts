import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { twitchService } from 'src/app/services/twitch.service';


@Component({
  selector: 'app-twitch-partner-ekle',
  templateUrl: './twitch-partner-ekle.component.html',
  styleUrls: ['./twitch-partner-ekle.component.css'],
  providers: [twitchService]
})
export class TwitchPartnerEkleComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private twitchSrvc: twitchService
  ) { }

  ngOnInit(): void {}

  twPartnerEkle(yayinciname: any,twlink: any,twkapak: any,twimg1: any,twimg2:any,twimg3:any,twimg4: any, twaciklama: any,isActive: any) {

    const postTwitch = {
      id: 1,
      name: yayinciname.value,
      twadress: twlink.value,
      twkapakimg: twkapak.value,
      twimg1: twimg1.value,
      twimg2: twimg2.value,
      twimg3: twimg3.value,
      twimg4: twimg4.value,
      twaciklama: twaciklama.value,
      isActive: isActive.checked,

    }

    this.twitchSrvc.addTwitch(postTwitch).subscribe(twitchdata => {
      alert("İçerik Başarı ile eklendi")
    });
      
  }

}
