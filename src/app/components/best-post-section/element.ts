export interface Paragraph {
    type: String,
    content: any,
    option: Object
}

export interface ArticleBest {
    img: String,
    title: String,
    category: String,
    prev: String,
    content: Array<Paragraph>
    date: Date
    link: String,
    author: String,
    commentCount: number
}

export interface RelArticle {
    img: String,
    title: String,
    date: Date
}