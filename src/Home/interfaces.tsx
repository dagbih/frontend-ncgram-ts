export interface IPost {
  content: string,
  id: number,
  imageUrl: string,
  sender: string,
}

export interface IFeedState {
  posts: []
}