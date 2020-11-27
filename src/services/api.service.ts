import fetch from 'isomorphic-unfetch'

export const fetchVideo = async (id: string, get: string) => {
  const url_api = 'https://youtube.googleapis.com/youtube/v3/videos?key='
  const keyAPI = 'AIzaSyBJnKIwnXp1su2FL1A2lTnvzbvu9vFe6rI'

  const searchParam = '&chart=mostPopular&maxResults=15&videoCategoryId='
  const videoParam = '&id='

  const url = `${url_api}${keyAPI}&part=snippet&${
    get === 'search' ? searchParam : videoParam
  }${id}`
  const res = await fetch(url).then((items) => items.json())

  return res
}
