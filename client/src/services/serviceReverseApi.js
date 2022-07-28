const ReverseApi = async (url, text) => {
  const controller = new AbortController()
  const signal = controller.signal
  try {
    const response = await fetch(url + text, {
      method: 'get',
      signal: signal
    })
    const data = await response.json()
    console.log('data de Responseeee', data)
    return data
  } catch (error) {
    console.error(error)
    return []
  }
}

export default ReverseApi
