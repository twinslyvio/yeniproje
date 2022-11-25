import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GaleriService } from 'src/app/services/galeri.service';

@Component({
  selector: 'app-galeri-konvoy-ekle',
  templateUrl: './galeri-konvoy-ekle.component.html',
  styleUrls: ['./galeri-konvoy-ekle.component.css'],
  providers: [GaleriService]
})
export class GaleriKonvoyEkleComponent implements OnInit {

   // two-bay binding // 
   galeriValueModel: any = {};
   // two-bay binding // duyuruEkle
   galeriMsg:string = "";

  constructor(
    private http: HttpClient, 
    private GaleriSrvc: GaleriService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  galeriEkleSubmit(galeriForms: NgForm) {

    const postGaleri = {
      id: 1, 
      name: this.galeriValueModel.name, 
      aracsayisi : this.galeriValueModel.aracsayisi, 
      imageUrl: this.galeriValueModel.imageUrl, 
      image1Url: this.galeriValueModel.image1Url,
      image2Url: this.galeriValueModel.image2Url, 
      image3Url: this.galeriValueModel.image3Url,
      image4Url: this.galeriValueModel.image4Url,
      aciklama: this.galeriValueModel.aciklama, 
      videoUrl: this.galeriValueModel.videoUrl,  
      isActive: this.galeriValueModel.isActive,
    }


    if(galeriForms) {
      this.GaleriSrvc.addGallery(postGaleri).subscribe(galeridata => {
        this.galeriMsg = "İçerik Başarı ile eklendi"
        window.location.reload();
      });
    } else {
      this.galeriMsg = "Formu Kontrol Ediniz!"
      return;
    }

  }

}
