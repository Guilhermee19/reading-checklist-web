export interface BookstoreFilter {
    q: string
    langRestrict?: string
    orderBy?: 'relevance' | 'newest'
    terms?: 'intitle' | 'inauthor' | ''
}