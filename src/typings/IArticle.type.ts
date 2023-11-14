export interface NewsArticle {
  url: string
  title: {
    long: string
    short: string
  }
  thumbnail: string
  dates: {
    posted: string
  }
  parents: Parent[]
  description: {
    long: string
    intro: string
  }
}

interface Parent {
  id: string
  attachment: string
}
