import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { duyuruService } from 'src/app/services/duyuru.service';
import { duyuruIcerik } from 'src/app/models/duyuru-icerik';








@Component({
  selector: 'app-duyuru-detay',
  templateUrl: './duyuru-detay.component.html',
  styleUrls: ['./duyuru-detay.component.css'],
  providers: [duyuruService],
})
export class DuyuruDetayComponent implements OnInit {

  dyricerik: duyuruIcerik | undefined;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private duyuruServices: duyuruService,
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const id = params["duyuruId"]
      this.duyuruServices.getDuyuruById(id).subscribe(duyuruResult => {
        this.dyricerik = { ...duyuruResult, id:id}
      });
    });

  }

}
