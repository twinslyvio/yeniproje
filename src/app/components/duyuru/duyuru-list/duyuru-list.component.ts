import { Component, OnInit } from '@angular/core';
import { duyuruIcerik } from 'src/app/models/duyuru-icerik';
import { duyuruService } from 'src/app/services/duyuru.service';



@Component({
  selector: 'app-duyuru-list',
  templateUrl: './duyuru-list.component.html',
  styleUrls: ['./duyuru-list.component.css'],
  providers: [duyuruService],
})
export class DuyuruListComponent implements OnInit {

  dyrIcerik : duyuruIcerik[] = [];

  constructor(private dyrServices : duyuruService) { }

  

  ngOnInit(): void {
    this.dyrServices.getDuyuru()
    .subscribe(dyrdata => {
      for(const dyrkey in dyrdata ) {
        this.dyrIcerik.push({  ...dyrdata[dyrkey], id: dyrkey, });
      }
    });
  }

}
