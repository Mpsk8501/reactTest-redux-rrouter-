const loadData = async (path = 'users') => {
  const rawData = await fetch(`https://jsonplaceholder.typicode.com/${path}`)
  const data = await rawData.json()
  return data
}

export { loadData }
