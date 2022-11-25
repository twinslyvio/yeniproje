import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { twitchService } from 'src/app/services/twitch.service';
import { twitchIcerik } from 'src/app/models/twitch-icerik';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { urlIcerik } from 'src/app/models/url-icerik';
import { urlService } from 'src/app/services/url-service';



@Component({
  selector: 'app-twitch-detay',
  templateUrl: './twitch-detay.component.html',
  styleUrls: ['./twitch-detay.component.css'],
  providers: [twitchService, urlService],
})
export class TwitchDetayComponent implements OnInit {

  url: urlIcerik;
  urlSafe: SafeResourceUrl;

  twcicerik: twitchIcerik | undefined;

  

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private twcServices : twitchService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {

    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlSafe);

    this.route.params.subscribe(params => {
      const id = params["twitchId"]
      this.twcServices.getTwitchById(id).subscribe(twitchResult => {
        this.twcicerik = { ...twitchResult, id:id}
      });
    });

    
  }

}
