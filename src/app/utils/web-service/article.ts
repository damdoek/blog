import { _Article, _Comment, Article } from "../classe/article";
import { articles, articleAbout } from "../data/articleDb";
import { Apollo, QueryRef } from 'apollo-angular'
import gql from 'graphql-tag'

export class WSArticle {
    articleListQuery = gql`query getArticles($query: String, $pagination: Pagination){
        getArticles(query:$query, pagination:$pagination)
        {
            article {
                _id
                title
                img
                prev
                category
                highlights {
                    path
                    texts {
                      value
                      type
                    }
                    score
                  }
                createdAt
                updatedAt
              }
              count
            }
    }`;
    articleQuery = gql`query getArticleById($id: String!){
        getArticleById(id: $id)
        {
            _id
            title
            img
            prev
            category
            content {
                _id
                text
                titleH2
                titleH4
                imgFull
                imgFullList2Col
                imgFullList3Col
                imgViewport
                imgViewportList
                type
                option{
                    overlay
                }
            }
            createdAt
            updatedAt
        }    
    }`;
    // articleAboutQuery = gql``;
    // user{
    //     name
    //     _id
    // }

    getCommentsQuery = gql`query getComments($id: String!, $pagination: Pagination){
        getComments(id: $id, pagination: $pagination)
        {
            _id
            comment
         
            createdAt
            updatedAt
            reply {
                comment
                createdAt
                updatedAt
               
            }
        }    
    }`

    getCommentsCountQuery = gql`query getComments($id: String!){
        getCommentsCount(id: $id)
    }`
    constructor(private apollo: Apollo) { }
    getArticle(id) {
        return this.apollo.watchQuery({
            query: this.articleQuery,
            variables: { id }
        });
    }
    getArticleAbout(): Promise<_Article> {
        return new Promise((resolve, reject) => {
            setTimeout(() => { }, 10)
            resolve(articleAbout)
        })
    }
    getArticleList(query, pagination) {
        return this.apollo.watchQuery({
            query: this.articleListQuery,
            variables: { query, pagination }
        });
    }
    getComments(id, pagination) {
        return this.apollo.watchQuery({
            query: this.getCommentsQuery,
            variables: { id, pagination }
        });
    }
    getCommentsCount(id) {
        return this.apollo.watchQuery({
            query: this.getCommentsCountQuery,
            variables: { id }
        });
    }
}