import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { urlIcerik } from "../models/url-icerik";

@Injectable()
    export class urlService {
        private urlLink = "https://ayintap-logistic-default-rtdb.firebaseio.com/";
    
        constructor(private http: HttpClient) { }

        getDuyuru(): Observable<urlIcerik[]> {
            return this.http.get<urlIcerik[]>(this.urlLink + "soruceurl.json");
        }

        getDuyuruById(id: string): Observable<urlIcerik> {
            return this.http.get<urlIcerik>(this.urlLink + "soruceurl/" + id + ".json");
        }

        addDuyuru( addUrl: urlIcerik ) : Observable<urlIcerik> {
            return this.http.post<urlIcerik>(this.urlLink + "soruceurl.json" , addUrl)
        }
    }