export interface Paragraph {
    type: String,
    content: any,
    option: Object
}
export interface Author {
    _id: String,
    name: String,
}

export interface Commenter {
    id: String,
    name: String,
}

export interface SimpleComment {
    _id: String
    user: Commenter
    comment: String
    timestamp: Date
}

export interface _Comment extends SimpleComment {
    reply: Array<SimpleComment>
}

export interface _Article {
    _id: String
    img: String
    title: String
    prev: String
    category: String
    tags?: Array<String>
    content?: Array<Paragraph>
    author?: Author
    timestamp: Date
    commentCount?: number
}

export class Article implements _Article {
    _id: String
    img: String
    title: String
    prev: String
    category: String
    tags: Array<String>
    content: Array<Paragraph>
    author: Author
    timestamp: Date
    commentCount: number
    constructor(article: _Article) {
        this._id = article._id || null
        this.img = article.img || null
        this.title = article.title || null
        this.prev = article.prev || null
        this.category = article.category || null
        this.tags = article.tags || []
        this.content = article.content || []
        this.author = article.author || null
        this.timestamp = article.timestamp || null
        this.commentCount = article.commentCount || null
    }

    save() {
        // save this article
    }
    delete() {
        // delete this article
    }
    update() {
        //update this artice
    }
    favorite() { }
    bookmark() { }
    share() { }
}

export class Comment implements _Comment {
    _id: String
    user: Commenter
    comment: String
    timestamp: Date
    reply: Array<SimpleComment>

    constructor(comment: _Comment) {
        this._id = comment._id
        this.user = comment.user
        this.comment = comment.comment
        this.timestamp = comment.timestamp
        this.reply = comment.reply
    }

    save(articleId) {
        // save this article
    }
    delete(articleId) {
        // delete this article
    }
    update(articleId) {
        //update this artice
    }
}

// export class ArticlePrev extends Article {
//     constructor(article: _ArticlePrev) {
//         super(article)
//     }

//     save() {
//         // save this article
//     }
//     delete() {
//         // delete this article
//     }
//     update() {
//         //update this artice
//     }
// }