import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from 'src/app/components/index/index.component';
import { GaleriComponent } from 'src/app/components/galeri/galeri.component';
import { DuyuruComponent } from 'src/app/components/duyuru/duyuru.component';
import { EkibekatilComponent } from 'src/app/components/ekibekatil/ekibekatil.component';
import { TwitchComponent } from './components/twitch/twitch.component';
import { InfoComponent } from './components/info/info.component';
import { GaleriDetayComponent } from './components/galeri/galeri-detay/galeri-detay.component';
import { SayfaBulunamadiComponent } from './components/sayfa-bulunamadi/sayfa-bulunamadi.component';
import { AdminLoginPageComponent } from './components/admin/admin-login-page/admin-login-page.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { TwitchDetayComponent } from './components/twitch/twitch-detay/twitch-detay.component';

const routes: Routes = [
  { path: '',  component : IndexComponent, title: 'Ayıntap Logistic '},
  { path: 'galeri', component : GaleriComponent, title: 'Galeri - Ayıntap Logistic' },
  { path: 'duyurular', component : DuyuruComponent, title: 'Duyurular - Ayıntap Logistic'  },
  { path: 'sende-aramiza-katil', component : EkibekatilComponent, title: 'Katıl - Ayıntap Logistic' },
  { path: 'twitch', component :TwitchComponent, title: 'Twitch de biz - Ayıntap Logistic' },
  { path: 'biz-kimiz', component :InfoComponent, title: 'Biz Kimiz? - Ayıntap Logistic' },
  { path: 'galeri/:galeriId', component :GaleriDetayComponent, title: 'Konvoy Detayı - Ayıntap Logistic' },
  { path: 'twitch/:twitchId', component :TwitchDetayComponent, title: 'Yayıncı Detayı - Ayıntap Logistic' },
  { path: 'admin-login', component : AdminLoginPageComponent, title: 'Admin Login - Ayıntap Logistic' },
  { path: 'adminpanel/yonetim', component: AdminPanelComponent, title: 'Admin Panel - Ayıntap Logistic' },

  // sayfa bulunamadı router sonda kalacak!
  { path: '**', pathMatch: 'full', component : SayfaBulunamadiComponent, title: 'Sayfa Bulunamadı - Ayıntap Logistic '},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
