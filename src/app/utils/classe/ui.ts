import { Router } from '@angular/router'
import { WSArticle } from '../web-service/article'
export interface IconMenuBtn {
    link: String
    icon?: String
    text?: String
}

export interface CarouselItem {
    img: String
    title: String
    category: String
    link: String
}

export interface MenuBtn {
    open: String
    close: String
}

export interface _Footer {
    social: Array<IconMenuBtn>
    copyright: String
}

export interface _Carousel {
    items: Array<CarouselItem>
    waitBeforFade?: number

}

export interface _PostViewStateBtn {
    grid: boolean
    isMobile: boolean

}

export interface _MenuStateBtn {
    open: boolean
    icon: MenuBtn

}





export interface _NavBar {
    logo: String
    sidebar: _SideBar

}

export interface _SideBar {
    title: String
    menuItems: Array<IconMenuBtn>
    social: Array<IconMenuBtn>

}

export class Carousel implements _Carousel {
    items: Array<CarouselItem>
    waitBeforFade: number
    currentItemIdx: number
    constructor(apollo, wbf?: number) {
        var wsArticle = new WSArticle(apollo)
        wsArticle.getArticleList('', { page: 0, pageSize: 4, sortKey: 'views' }).valueChanges.subscribe(result => {
            this.items = (result.data && result.data['getArticles']).article
        })

        this.waitBeforFade = wbf || 8000
        this.currentItemIdx = 0
    }
    addItem(item: CarouselItem) {
        this.items.push(item)
    }
    delItem(index: number) {
        this.items.splice(index, 1)
    }
    moveAuto(direction: number) {
        this.currentItemIdx = (this.currentItemIdx + direction) % this.items.length
        if (this.currentItemIdx < 0) this.currentItemIdx = this.items.length - 1
    }
    move(direction: number, int) {
        if (int) clearInterval(int)
        this.moveAuto(direction)
    }
}

export class PostViewStateBtn implements _PostViewStateBtn {
    grid: boolean
    isMobile: boolean
    constructor(grid?: boolean, isMobile?: boolean) {
        this.grid = grid ? true : false
        this.isMobile = isMobile ? true : false
        if (this.isMobile) {
            this.grid = true
        }
    }

    setGridView() {
        this.grid = true
    }
    setListView() {
        if (!this.isMobile) {
            this.grid = false
        }
        else {
            this.setGridView()
        }
    }
}

export class MenuStateBtn implements _MenuStateBtn {
    open: boolean
    icon: MenuBtn
    constructor(icon?: MenuBtn) {
        this.open = false
        this.icon = icon || { open: 'menu', close: 'menu_open' }
    }

    chgState() {
        this.open = !this.open
    }
}



export class Footer implements _Footer {
    social: Array<IconMenuBtn>
    copyright: String
    constructor(footer: _Footer) {
        this.social = footer.social || []
        this.copyright = footer.copyright || ''
    }
}

export class NavBar implements _NavBar {
    logo: String
    sidebar: _SideBar
    menuBtn: MenuStateBtn
    searchInputStat: boolean
    searchInputValue: String
    constructor(nb: _NavBar) {
        this.logo = nb.logo || ''
        this.menuBtn = new MenuStateBtn()
        this.searchInputStat = false
        this.searchInputValue = ''
        this.sidebar = nb.sidebar
    }
    chgtSearchInputStat() {
        this.searchInputStat = !this.searchInputStat
    }
    setSearchValue(val: String) {
        this.searchInputValue = val
    }
    goToSearch(router: Router) {
        router.navigate(['search'], { queryParams: { q: this.searchInputValue } })
    }
}

export class SideBar implements _SideBar {
    title: String
    menuItems: Array<IconMenuBtn>
    social: Array<IconMenuBtn>
    constructor(sb: _SideBar) {
        this.title = sb.title || ''
        this.menuItems = sb.menuItems || []
        this.social = sb.social || []
    }
}