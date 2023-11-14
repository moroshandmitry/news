export interface INewsItem {
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
  parents: Array<{
    id: string
    attachment: string
  }>
  description: {
    intro: string
  }
}
