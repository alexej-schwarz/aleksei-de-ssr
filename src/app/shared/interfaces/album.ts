export interface Album {
  author: string,
  teaser?: string,
  description?: string[],
  fixed?: boolean,
  id: string,
  coverImageSrc: string,
  releaseYear: number,
  title: string
}

export interface PlayList {
  tracks: Track[]
}

export interface Author {
  music?: string,
  text?: string
}

export interface Track {
  title: string,
  author?: Author,
  text?: string
  description?: string
  url?: string
}

export interface Member {
  name: string,
  link?: string,
  description?: string
}

export interface AlbumDescription {
  description?: string[],
  members?: Member[]
}
