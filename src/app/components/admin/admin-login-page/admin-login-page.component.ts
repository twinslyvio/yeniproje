import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent implements OnInit {




  constructor(private route: ActivatedRoute, private http: HttpClient) { 

  }

  ngOnInit(): void { }


 
  

// adminGiris() {
//   RouterLink = '/admin/login/adminpanel/{{  this.admindepo.ad}}';
// }

}
