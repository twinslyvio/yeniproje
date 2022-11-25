import { Component, OnInit } from '@angular/core';
import { GaleriIcerik } from 'src/app/models/galeri-icerik';
import { GaleriService } from 'src/app/services/galeri.service';

@Component({
  selector: 'app-galeri-list',
  templateUrl: './galeri-list.component.html',
  styleUrls: ['./galeri-list.component.css'],
  providers: [GaleriService],
})
export class GaleriListComponent implements OnInit {

   galeri: GaleriIcerik[] = [];

   constructor(private GaleriServices: GaleriService, )  {}

  

  ngOnInit(): void {
    this.GaleriServices.getGallery()
      .subscribe(galeridata => {
        for(const key in galeridata) {
          this.galeri.push({ ...galeridata[key], id: key, });
        }
      });
  }



  



  

}



