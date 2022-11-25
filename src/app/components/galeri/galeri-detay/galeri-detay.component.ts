import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GaleriIcerik } from 'src/app/models/galeri-icerik';
import { HttpClient } from '@angular/common/http';
import { GaleriService } from 'src/app/services/galeri.service';

@Component({
  selector: 'app-galeri-detay',
  templateUrl: './galeri-detay.component.html',
  styleUrls: ['./galeri-detay.component.css'],
  providers: [ GaleriService ] 
})
export class GaleriDetayComponent implements OnInit {

 icerik: GaleriIcerik | undefined;

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient,
    private galeriServices: GaleriService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      const id = params["galeriId"]

      this.galeriServices.getGalleryById(id).subscribe(galleryResult => {
        this.icerik = { ...galleryResult, id: id}

      });

    });
  }

}
