import { urlIcerik } from "./url-icerik";

export class urlDepo {
    private Urlicerik : urlIcerik[] = [];

    gettingUrl(id : number) {
        return this.Urlicerik.find(Urlicerik=>Urlicerik.id == id);
    }
}
