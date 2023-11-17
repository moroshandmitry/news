export interface IArticlesItemResponse {
  id: string
  url: string
  thumbnail: string
  dates: {
    posted: string
  }
  title: {
    long: string
    short: string
  }
  parents: Parent[]
  description: {
    intro: string
  }
}

interface Parent {
  id: string
  attachment: string
}
