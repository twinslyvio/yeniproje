import { duyuruIcerik } from "./duyuru-icerik";

export class duyuruIcerikDeposu {
    private duyuruicrk : duyuruIcerik[] = [];

    getDuyuruIcerik(): duyuruIcerik[] {
        return this.duyuruicrk.filter(duyuruicrk => duyuruicrk.isActive)
    }

    gettingByDyrId(id:number) {
        return this.duyuruicrk.find(duyuruicrk => duyuruicrk.id == id)
    }





}