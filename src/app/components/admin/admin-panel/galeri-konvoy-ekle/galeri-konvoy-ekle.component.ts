import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GaleriService } from 'src/app/services/galeri.service';

@Component({
  selector: 'app-galeri-konvoy-ekle',
  templateUrl: './galeri-konvoy-ekle.component.html',
  styleUrls: ['./galeri-konvoy-ekle.component.css'],
  providers: [GaleriService]
})
export class GaleriKonvoyEkleComponent implements OnInit {

  constructor(
    private http: HttpClient, 
    private GaleriSrvc: GaleriService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  konvoyEkle(isim:any,aracsayisi:any,kapakresmi:any,image1:any,image2:any,image3:any,image4:any,videoUrl:any,aciklama:any,isActive:any) {

    const postGaleri = {
      id: 1, 
      name: isim.value, 
      aracsayisi : aracsayisi.value, 
      imageUrl: kapakresmi.value, 
      image1Url: image1.value,
      image2Url: image2.value, 
      image3Url: image3.value,
      image4Url: image4.value,
      aciklama: aciklama.value, 
      videoUrl: videoUrl.value,  
      isActive: isActive.checked,
    }

    this.GaleriSrvc.addGallery(postGaleri).subscribe(galeridata => {
        // this.router.navigate(["/galeri"])
        alert("İçerik Başarı ile eklendi")
    });

  }

}
