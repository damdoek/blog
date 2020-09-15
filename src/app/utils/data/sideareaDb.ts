import { SidePanelArea, Category, Insta, _FollowPanel, _TopArticlePanel, _AboutPanel, _InstaPanel, _CategoryPanel, _BannerPanel, _IFramePanel } from "../classe/sideplanel"
import { IconMenuBtn } from "../classe/ui"
import { articles, articleAbout } from './articleDb'
const instaList: Array<Insta> = [
    { link: "https://picsum.photos/400/300?random=1" },
    { link: "https://picsum.photos/400/300?random=2" },
    { link: "https://picsum.photos/400/300?random=3" },
    { link: "https://picsum.photos/400/300?random=4" },
    { link: "https://picsum.photos/400/300?random=5" },
    { link: "https://picsum.photos/400/300?random=6" },
    { link: "https://picsum.photos/400/300?random=7" },
    { link: "https://picsum.photos/400/300?random=8" },
    { link: "https://picsum.photos/400/300?random=9" },
]

const categoryList: Array<Category> = [{
    name: "Travel",
    count: 6,
    link: '#'
}, {
    name: "Food",
    count: 5,
    link: '#'
}, {
    name: "Anime",
    count: 1,
    link: '#'
}, {
    name: "Chanoyu",
    count: 3,
    link: '#'
}]

const followList: Array<IconMenuBtn> = [
    {
        link: "#",
        icon: "fab fa-facebook"
    },
    {
        link: "#",
        icon: "fab fa-instagram"
    },
    {
        link: "#",
        icon: "fab fa-twitter"
    },
    {
        link: "#",
        icon: "fab fa-youtube"
    }
]

export const follow: _FollowPanel = { type: 'follow', title: "follow US", item: followList }


export const top: _TopArticlePanel = { type: 'top', title: "Most viewed", item: articles }


export const about: _AboutPanel = { type: 'about', title: "About me", item: articleAbout }

export const insta: _InstaPanel = { type: 'picture', title: "Instagram", item: instaList }

export const category: _CategoryPanel = { type: 'category', title: "Categories", item: categoryList }

export const banner: _BannerPanel = { type: 'banner-spot', title: "", item: { img: "assets/img/banner.png", link: "/#" } }

export const ifrsns: _IFramePanel = {
    type: 'banner-spot-if', title: "", item: {
        link: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFrying-Pan-Cakes-du-Monde-111623670643433&tabs=timeline&width=300&height=350&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",
        scrolling: 'no',
        allowTransparency: true
    },
    width: 300,
    height: 250,
}

export const aboutSideAreaPanels: SidePanelArea = {
    items: [
        about, follow, ifrsns, insta, top, banner, category
    ]
}

export const otherSideAreaPanels: SidePanelArea = {
    items: [
        follow, top, ifrsns, banner, insta, category, banner
    ]
}