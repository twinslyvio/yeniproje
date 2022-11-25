import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, Observable } from "rxjs";
import { twitchIcerik } from "../models/twitch-icerik";


// local service tw
@Injectable()
    export class twitchService {
        private twitchUrl = "https://ayintap-logistic-default-rtdb.firebaseio.com/";

        constructor(private http: HttpClient) { }

        getTwitch(): Observable<twitchIcerik[]> {
            return this.http.get<twitchIcerik[]>(this.twitchUrl + "twitch.json").pipe(delay(1000));
        }

        getTwitchById(id: string): Observable<twitchIcerik> {
            return this.http.get<twitchIcerik>(this.twitchUrl + "twitch/" + id + ".json").pipe(delay(1000));
        }

        addTwitch( yayinci: twitchIcerik ) : Observable<twitchIcerik> {
            return this.http.post<twitchIcerik>(this.twitchUrl + "twitch.json" , yayinci)
        }



    }


