import { Component, OnInit } from '@angular/core';
import { twitchIcerik } from 'src/app/models/twitch-icerik';
import { twitchService } from 'src/app/services/twitch.service';



@Component({
  selector: 'app-twitch-list',
  templateUrl: './twitch-list.component.html',
  styleUrls: ['./twitch-list.component.css'],
  providers: [ twitchService ],
})
export class TwitchListComponent implements OnInit {

  twcicerik: twitchIcerik[] = [];

  constructor( private twcServices : twitchService ) { }



  ngOnInit(): void {
    this.twcServices.getTwitch()
      .subscribe(twcdata => {
        for(const twckey in twcdata ) {
          this.twcicerik.push({  ...twcdata[twckey], id: twckey, });
        }
      });
  }



}
