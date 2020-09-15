import { ArticlePrev } from '../post-section/element'

interface followPanel {
    link: String
    class: String
}
interface about {
    img: String,
    title: String,
    contentPrev: String,
}
interface sns {
    link: String,
    width: number,
    height: number,
    scrolling: String,
    allowTransparency: boolean
}

interface banner {
    img: String,
    link: String,
}

interface category {
    name: String
    count: number
    link: String
}

interface insta {
    img: String
}

export class Panel {
    type: String
    title: String
    panel: any
    constructor(type: String, title: String, panel: any) {
        this.type = type
        this.title = title
        this.panel = panel
    }
}

export class FollowPanel extends Panel {
    panel: Array<followPanel>
    constructor(title: String, panel: Array<followPanel>) {
        super('follow', title, panel)
    }
}

export class TopArticlePanel extends Panel {
    panel: Array<ArticlePrev>
    constructor(title: String, panel: Array<ArticlePrev>) {
        super('top', title, panel)
    }
}

export class AboutPanel extends Panel {
    panel: about
    constructor(title: String, panel: about) {
        super('about', title, panel)
    }
}

export class BannerPanel extends Panel {
    panel: banner
    constructor(panel: banner) {
        super('banner-spot', null, panel)
    }
}

export class CategoryPanel extends Panel {
    panel: Array<category>
    constructor(title: String, panel: Array<category>) {
        super('category', title, panel)
    }
}

export class InstaPanel extends Panel {
    panel: Array<insta>
    constructor(title: String, panel: Array<insta>) {
        super('picture', title, panel)
    }
}

export class IFramePanel extends Panel {
    panel: sns
    constructor(panel: sns) {
        super('banner-spot-if', null, panel)
    }
}

