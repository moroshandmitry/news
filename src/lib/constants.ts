export const LOGO_URL = process.env.REACT_APP_IMAGE_LOGO_URL

export const ARTICLES_PER_PAGE = 10

const generateThumbnailURL = (size) => {
  const baseURL = process.env.REACT_APP_IMAGE_THUMBNAIL_URL
  return `${baseURL}${size}/`
}

export const ARTICLES_URL = generateThumbnailURL('370x194')
export const ARTICLE_URL = generateThumbnailURL('600x315')
