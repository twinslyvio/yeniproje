import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent implements OnInit {
    
  error: string = "";



  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient,
    private router: Router) 
    {}

  ngOnInit(): void { }

  admingiris(email:any,password:any) {

    if(email.value == "" && password.value == "") {
      this.error = "E-mail and şifre bilginizi giriniz!";
    } 
    else if(email.value == "") {
      this.error = "E-mail bilgisi boş olamaz. Lütfen E-mail bilginizi giriniz!";
    }
    else if(password.value == "") {
      this.error = "Password bilgisi boş olamaz. Lütfen şifrenizi giriniz."
    }
    else {
      this.router.navigate(["/adminpanel/yonetim"])
      return;
    }



  }



}
