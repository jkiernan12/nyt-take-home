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

export { cleanSectionData }