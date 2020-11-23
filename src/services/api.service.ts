import fetch from 'isomorphic-unfetch'

export const fetchVideo = async (id: number) => {
  const keyAPI = 'AIzaSyB_Uevap8EwjMhA5iEvlPwCptadmtZFFYk'
  const categoryID = id
  const url = `https://youtube.googleapis.com/youtube/v3/videos?key=${keyAPI}&chart=mostPopular&maxResults=15&part=snippet&videoCategoryId=${categoryID}`
  const res = await fetch(url).then((items) => items.json())

  return res
}
