const getSection = (name) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${name}.json?api-key=${process.env.REACT_APP_NYT_KEY}`)
  .then(res => res.json())
  .catch(err => console.log(err))
}

export { getSection }