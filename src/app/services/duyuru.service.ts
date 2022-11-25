import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, Observable } from "rxjs";
import { duyuruIcerik } from "../models/duyuru-icerik";

// local service duyuru
@Injectable()
    export class duyuruService {
        private duyuruUrl = "https://ayintap-logistic-default-rtdb.firebaseio.com/";
    
        constructor(private http: HttpClient) { }

        getDuyuru(): Observable<duyuruIcerik[]> {
            return this.http.get<duyuruIcerik[]>(this.duyuruUrl + "duyuru.json").pipe(delay(1000));
        }

        getDuyuruById(id: string): Observable<duyuruIcerik> {
            return this.http.get<duyuruIcerik>(this.duyuruUrl + "duyuru/" + id + ".json").pipe(delay(1000));
        }

        addDuyuru( shareDuyuru: duyuruIcerik ) : Observable<duyuruIcerik> {
            return this.http.post<duyuruIcerik>(this.duyuruUrl + "duyuru.json" , shareDuyuru)
        }
    }