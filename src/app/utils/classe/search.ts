import { isPlatformBrowser } from '@angular/common';
enum Sort {
    asc = 1,
    desc = -1
}

export class SearchStat {
    query: String
    sort: Sort
    sortBy: String
    page: number
    pageSize: number
    constructor(platform: Object, q?: string) {
        this.query = q || null
        this.sort = Sort.desc
        this.sortBy = 'updatedAt'
        this.page = 0
        if (isPlatformBrowser(platform))
            this.pageSize = 8
        else
            this.pageSize = 4
    }
    setQuery(q: string) {
        this.query = q
    }
    setPageSize(s: number) {
        this.pageSize = s
    }
    setToAsc() {
        this.sort = Sort.asc
    }
    setToDesc() {
        this.sort = Sort.desc
    }
    setPage(s: number) {
        this.page = s
    }
    nextPage() {
        this.page++
    }
    prevPage() {
        this.page--
    }
    clear() {
        this.query = null
        this.page = 1
    }
    search() {
        console.log(this)
    }
}