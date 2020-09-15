import { _Footer, IconMenuBtn } from "../classe/ui";

const socialBtn: Array<IconMenuBtn> = [
    {
        link: "#",
        icon: "fab fa-facebook",
        text: 'facebook'
    },
    {
        link: "#",
        icon: "fab fa-instagram",
        text: 'instagram'
    },
    {
        link: "#",
        icon: "fab fa-twitter",
        text: 'twitter'
    },
    {
        link: "#",
        icon: "fab fa-youtube",
        text: 'youtube'
    },
    {
        link: "#",
        icon: "fa fa-rss",
        text: 'RSS'
    },
    {
        link: "#",
        icon: "fa fa-map",
        text: 'sitemap'
    }
]

export const footer: _Footer = {

    social: socialBtn,
    copyright: 'Thank you  for your support'
}