import { GaleriIcerik } from "./galeri-icerik";

export class GaleriIcerikDeposu {
    private icerik: GaleriIcerik[] = [];

    getIcerik(): GaleriIcerik[] { 
        return this.icerik.filter(icerik=>icerik.isActive);
    }
      
    gettingById(id : number) {
        return this.icerik.find(icerik=>icerik.id == id);
    }
}



