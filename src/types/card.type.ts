export type Cards = {
  kind: string
  etag: string
  id: string
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      high: {
        url: string
      }
    }
  }
}
