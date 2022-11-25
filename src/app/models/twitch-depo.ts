import { twitchIcerik } from "./twitch-icerik";

export class twitchIcerkDeposu {
    private twicerik: twitchIcerik[] = [];

    getTwicerik(): twitchIcerik[] {
        return this.twicerik.filter(twicerik=>twicerik.isActive);
    }

    gettingByTwId(id : number) {
        return this.twicerik.find(twicerik=>twicerik.id == id);
    }

}