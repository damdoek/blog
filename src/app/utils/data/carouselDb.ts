import { Carousel, CarouselItem, _Carousel } from "../classe/ui";

export const carousel: _Carousel = {
    items: [{
        img: "https://picsum.photos/1080/530?random=15",
        title: "10 amazing way to  enjoy Chanoyu",
        category: "Chanoyu",
        link: "chanoyou"
    },
    {
        img: "https://picsum.photos/1080/530?random=16",
        title: "10 amazing way to  enjoy food",
        category: "food",
        link: "food"
    },
    {
        img: "https://picsum.photos/1080/530?random=17",
        title: "10 amazing way to  enjoy Yasugi",
        category: "Yasugi",
        link: "yasugi"
    }],
    waitBeforFade: 9000
}