import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { twitchIcerik } from "../models/twitch-icerik";


// local service tw
@Injectable()
    export class twitchService {
        private twitchUrl = "https://ayintap-logistic-default-rtdb.firebaseio.com/";

        constructor(private http: HttpClient) { }

        getTwitch(): Observable<twitchIcerik[]> {
            return this.http.get<twitchIcerik[]>(this.twitchUrl + "twitch.json");
        }

        getTwitchById(id: string): Observable<twitchIcerik> {
            return this.http.get<twitchIcerik>(this.twitchUrl + "twitch/" + id + ".json");
        }

        addTwitch( yayinci: twitchIcerik ) : Observable<twitchIcerik> {
            return this.http.post<twitchIcerik>(this.twitchUrl + "twitch.json" , yayinci)
        }



    }


