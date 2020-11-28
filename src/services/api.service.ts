import fetch from 'isomorphic-unfetch'

export const fetchVideo = async (
  id: string | string[] | undefined,
  get: string
) => {
  const url_api = 'https://youtube.googleapis.com/youtube/v3/videos?key='
  const keyAPI = 'AIzaSyAEYcy1nuIFziS1KN3__QVPUraftncTk08'

  const searchParam = '&chart=mostPopular&maxResults=15&videoCategoryId='
  const videoParam = '&id='

  const url = `${url_api}${keyAPI}&part=snippet&${
    get === 'search' ? searchParam : videoParam
  }${id}`
  const res = await fetch(url).then((items) => items.json())

  return res
}
