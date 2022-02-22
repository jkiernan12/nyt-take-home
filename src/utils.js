const cleanSectionData = (data) => {
  return data.results.map(({title, byline, abstract, published_date, url, multimedia}) => {
    return {
      title,
      byline,
      abstract,
      url,
      date: published_date,
      imageLarge: multimedia ? {
        url: multimedia[0].url,
        caption: multimedia[0].caption
      } : null,
      imageSmall: multimedia ? {
        url: multimedia[2].url,
        caption: multimedia[2].caption
      } : null,
    }
  })
}

const validateCategory = (category) => {
  const validCategories = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world']
  return validCategories.some(el => el === category)
}

export { cleanSectionData, validateCategory }