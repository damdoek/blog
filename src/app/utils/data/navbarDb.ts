import { IconMenuBtn, MenuBtn, _SideBar, NavBar, _NavBar } from "../classe/ui";

const menuList: Array<IconMenuBtn> = [
    { text: 'home', icon: '', link: 'home' },
    { text: 'about', icon: '', link: 'about' },
    { text: 'article', icon: '', link: 'search' },
]
const socialList: Array<IconMenuBtn> = [
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

export const sideBar: _SideBar = {
    title: 'Blog',
    menuItems: menuList,
    social: socialList,
}

export const navBar: _NavBar = {
    logo: "assets/img/logo.png",
    sidebar: sideBar
}


