import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { duyuruService } from 'src/app/services/duyuru.service';
import { NgForm } from '@angular/forms';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-duyuru-ekle',
  templateUrl: './duyuru-ekle.component.html',
  styleUrls: ['./duyuru-ekle.component.css'],
  providers: [duyuruService]
})
export class DuyuruEkleComponent implements OnInit {


  duyuruMsg: string = "";
  

 // two-bay binding // 
  duyuruValueModel: any = {};
  // two-bay binding // duyuruEkle

  constructor(
    private http: HttpClient,
    private router: Router,
    private DuyuruSrvc: duyuruService,
  ) { }

  duyuruEkleSubmit(duyuruForm: NgForm) {


    const postDuyuru = {
      id:1,
      duyuruName: this.duyuruValueModel.duyuruName,
      duyuruKapak: this.duyuruValueModel.duyuruKapak,
      dyrimage1: this.duyuruValueModel.dyrimage1,
      dyrimage2: this.duyuruValueModel.dyrimage2,
      dyrimage3: this.duyuruValueModel.dyrimage3,
      duyuruAciklama: this.duyuruValueModel.duyuruAciklama,
      isActive: this.duyuruValueModel.isActive,
    }

    if(duyuruForm.valid) {
      this.DuyuruSrvc.addDuyuru(postDuyuru).subscribe(duyuruData => {
        window.location.reload()
        this.duyuruMsg = "Duyuru Başarı ile Eklendi";
        return;
      });
    } else {
      this.duyuruMsg ="Formu Kontrol ediniz.";
      return;
    }

    console.log(this.duyuruValueModel)
  }

  ngOnInit(): void {
  }

}
