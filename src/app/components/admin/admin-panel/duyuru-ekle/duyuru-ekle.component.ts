import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { duyuruService } from 'src/app/services/duyuru.service';

@Component({
  selector: 'app-duyuru-ekle',
  templateUrl: './duyuru-ekle.component.html',
  styleUrls: ['./duyuru-ekle.component.css'],
  providers: [duyuruService]
})
export class DuyuruEkleComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private DuyuruSrvc: duyuruService,
  ) { }

  duyuruEkle(duyuruName:any,duyuruKapak:any,dyrimage1:any,dyrimage2:any,dyrimage3:any,duyuruAciklama:any,isActive:any) {

    const postDuyuru = {
      id:1,
      duyuruName: duyuruName.value,
      duyuruKapak: duyuruKapak.value,
      dyrimage1: dyrimage1.value,
      dyrimage2: dyrimage2.value,
      dyrimage3: dyrimage3.value,
      duyuruAciklama: duyuruAciklama.value,
      isActive: isActive.checked,
    }

    this.DuyuruSrvc.addDuyuru(postDuyuru).subscribe(duyuruData => {
      alert("Duyuru Başarı ile eklendi")
      window.location.reload()
    });

  }

  ngOnInit(): void {
  }

}
