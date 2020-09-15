import { TopArticle, Category, About, InstaPhoto } from './element'
import { FollowPanel, TopArticlePanel, AboutPanel, InstaPanel, CategoryPanel, BannerPanel, IFramePanel } from '../classes/panel'




const instaList: Array<InstaPhoto> = [
    { img: "https://picsum.photos/400/300?random=1", },
    { img: "https://picsum.photos/400/300?random=2", },
    { img: "https://picsum.photos/400/300?random=3", },
    { img: "https://picsum.photos/400/300?random=4", },
    { img: "https://picsum.photos/400/300?random=5", },
    { img: "https://picsum.photos/400/300?random=6", },
    { img: "https://picsum.photos/400/300?random=7", },
    { img: "https://picsum.photos/400/300?random=8", },
    { img: "https://picsum.photos/400/300?random=9", },
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

export const follow = new FollowPanel("follow US",
    [
        {
            link: "#",
            class: "fab fa-facebook"
        },
        {
            link: "#",
            class: "fab fa-instagram"
        },
        {
            link: "#",
            class: "fab fa-twitter"
        },
        {
            link: "#",
            class: "fab fa-youtube"
        }
    ])

export const top = new TopArticlePanel("Most viewed",
    [{
        img: "https://picsum.photos/400/300?random=21",
        title: "10 amazing way to  enjoy Chanoyu",
        date: new Date('2020-03-12'),
        category: 'Chanoyu',
        prev: "",
        link: '#'
    },
    {
        img: "https://picsum.photos/400/300?random=18",
        title: "10 amazing way to  enjoy food",
        date: new Date('2020-03-12'),
        category: 'Chanoyu',
        prev: "",
        link: '#'
    },
    {
        img: "https://picsum.photos/400/300?random=19",
        title: "10 amazing way to  enjoy Yasugi",
        date: new Date('2020-03-12'),
        category: 'Chanoyu',
        prev: "",
        link: '#'
    }])

export const about = new AboutPanel("About me",
    {
        img: "https://picsum.photos/200/300?random=20",
        title: "七海鳥",
        contentPrev: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache."
    })
export const insta = new InstaPanel("Instagram", instaList)

export const category = new CategoryPanel("Categories", categoryList)

export const banner = new BannerPanel({ img: "assets/img/banner.png", link: "/#" })

export const ifrsns = new IFramePanel({
    link: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFrying-Pan-Cakes-du-Monde-111623670643433&tabs=timeline&width=300&height=350&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",
    width: 300,
    height: 250,
    scrolling: 'no',
    allowTransparency: true
})