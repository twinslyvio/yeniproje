import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DuyuruComponent } from './components/duyuru/duyuru.component';
import { EkibekatilComponent } from './components/ekibekatil/ekibekatil.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaleriComponent } from './components/galeri/galeri.component';
import { GaleriListComponent } from './components/galeri/galeri-list/galeri-list.component';
import { IndexComponent } from './components/galeri/index/index.component';
import { InfoComponent } from './components/info/info.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TwitchComponent } from './components/twitch/twitch.component';
import { TwitchListComponent } from './components/twitch/twitch-list/twitch-list.component';
import { GaleriDetayComponent } from './components/galeri/galeri-detay/galeri-detay.component';
import { SayfaBulunamadiComponent } from './components/sayfa-bulunamadi/sayfa-bulunamadi.component';
import { AdminLoginPageComponent } from './components/admin/admin-login-page/admin-login-page.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { GaleriKonvoyEkleComponent } from './components/admin/admin-panel/galeri-konvoy-ekle/galeri-konvoy-ekle.component';
import { DuyuruEkleComponent } from './components/admin/admin-panel/duyuru-ekle/duyuru-ekle.component';
import { TwitchPartnerEkleComponent } from './components/admin/admin-panel/twitch-partner-ekle/twitch-partner-ekle.component';
import { TwitchDetayComponent } from './components/twitch/twitch-detay/twitch-detay.component';
import { DuyuruListComponent } from './components/duyuru/duyuru-list/duyuru-list.component';
import { DuyuruDetayComponent } from './components/duyuru/duyuru-detay/duyuru-detay.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DuyuruComponent,
    EkibekatilComponent,
    FooterComponent,
    GaleriComponent,
    GaleriListComponent,
    IndexComponent,
    InfoComponent,
    NavbarComponent,
    TwitchComponent,
    TwitchListComponent,
    GaleriDetayComponent,
    SayfaBulunamadiComponent,
    AdminLoginPageComponent,
    AdminPanelComponent,
    GaleriKonvoyEkleComponent,
    DuyuruEkleComponent,
    TwitchPartnerEkleComponent,
    TwitchDetayComponent,
    DuyuruListComponent,
    DuyuruDetayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
