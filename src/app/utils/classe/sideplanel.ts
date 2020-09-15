import { _Article } from './article'
import { IconMenuBtn } from './ui'
import { WSArticle } from '../web-service/article'


export interface _Panel {
    type: String
    title: String
    item: any
}

export interface _FollowPanel extends _Panel {
    item: Array<IconMenuBtn>
}
export interface _TopArticlePanel extends _Panel {
    item: Array<_Article>
}
export interface _AboutPanel extends _Panel {
    item: _Article
}
export interface _BannerPanel extends _Panel {
    item: Banner
}
export interface _CategoryPanel extends _Panel {
    item: Array<Category>
}
export interface _InstaPanel extends _Panel {
    item: Array<Insta>
}
export interface _IFramePanel extends _Panel {
    item: SNS
    width: number
    height: number
}

interface SNS {
    link: String,
    scrolling: String,
    allowTransparency: boolean
}

interface Banner {
    img: String,
    link: String,
}

export interface Category {
    name: String
    count: number
    link: String
}

export interface Insta {
    link: String
}

export interface _SidePanelArea {
    items: Array<Panel>
}

export class Panel implements _Panel {
    type: String
    title: String
    item: any
    constructor(type: String, title: String, item: any) {
        this.type = type
        this.title = title
        this.item = item
    }
}

export class FollowPanel extends Panel implements _FollowPanel {
    item: Array<IconMenuBtn>
    constructor(title: String, item: Array<IconMenuBtn>) {
        super('follow', title, item)

    }
}

export class TopArticlePanel extends Panel implements _TopArticlePanel {
    item: Array<_Article>
    nbArticle: number
    constructor(title: String, apollo, nbArt?: number) {
        super('top', title, null)
        this.nbArticle = nbArt || 4
        var wsArticle = new WSArticle(apollo)
        wsArticle.getArticleList('', { pageSize: this.nbArticle, page: 0, sortKey: 'likes' }).valueChanges.subscribe(result => {
            this.item = (result.data && result.data['getArticles']).article
        })
    }
}

export class AboutPanel extends Panel implements _AboutPanel {
    item: _Article
    constructor(title: String, item: _Article) {
        super('about', title, item)
    }
}

export class BannerPanel extends Panel implements _BannerPanel {
    item: Banner
    constructor(item: Banner) {
        super('banner-spot', null, item)
    }
}

export class CategoryPanel extends Panel implements _CategoryPanel {
    item: Array<Category>
    constructor(title: String, item: Array<Category>) {
        super('category', title, item)
    }
}

export class InstaPanel extends Panel implements _InstaPanel {
    item: Array<Insta>
    constructor(title: String, item: Array<Insta>) {
        super('picture', title, item)
    }
}

export class IFramePanel extends Panel implements _IFramePanel {
    item: SNS
    width: number
    height: number
    constructor(item: SNS, w?: number, h?: number) {
        super('banner-spot-if', null, item)
        this.width = w || 0
        this.height = h || 0
    }
}

export class SidePanelArea implements _SidePanelArea {
    items: Array<Panel>
    constructor(items: Array<any>, apollo) {
        this.items = []
        items.map(item => {
            switch (item.type) {
                case 'follow': this.items.push(new FollowPanel(item.title, item.item))
                    break;
                case 'top': this.items.push(new TopArticlePanel(item.title, apollo, item.nbItem))
                    break;
                case 'about': this.items.push(new AboutPanel(item.title, item.item))
                    break;
                case 'banner-spot': this.items.push(new BannerPanel(item))
                    break;
                case 'category': this.items.push(new CategoryPanel(item.title, item.item))
                    break;
                case 'picture': this.items.push(new InstaPanel(item.title, item.item))
                    break;
                case 'banner-spot-if': this.items.push(new IFramePanel(item))
                    break;

                default:
                    break;
            }
        })
    }
}