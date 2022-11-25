import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GaleriIcerik } from "../models/galeri-icerik";


// local services
@Injectable ()
export class GaleriService {
        private GaleriUrl = "https://ayintap-logistic-default-rtdb.firebaseio.com/";

        constructor (private http: HttpClient) {}

        getGallery(): Observable<GaleriIcerik[]> {
            return this.http.get<GaleriIcerik[]>(this.GaleriUrl + "galeri.json" );
        }

        getGalleryById(id: string): Observable<GaleriIcerik> {
            return this.http.get<GaleriIcerik>(this.GaleriUrl + "galeri/" + id + ".json" );
        }

        addGallery( konvoy: GaleriIcerik ): Observable<GaleriIcerik> {
            return this.http.post<GaleriIcerik>(this.GaleriUrl + "galeri.json" , konvoy);

        }


}