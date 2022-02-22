const validCategories = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world']

const preferredCategories = ['arts', 'books', 'business', 'fashion', 'food', 'health', 'movies', 'opinion', 'politics', 'science', 'sports', 'technology', 'theater',  'travel', 'us', 'world']

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
  return validCategories.some(el => el === category)
}

const toTitleCase = (word) => {
  const newWord = word.split('')
  newWord[0] = newWord[0].toUpperCase()
  return newWord.join('')
}

export { validCategories, preferredCategories, cleanSectionData, validateCategory, toTitleCase }