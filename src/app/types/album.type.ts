export type Album = {
    author: string,
    teaser?: string,
    description?: string[],
    fixed?: boolean,
    id: string,
    coverImageSrc: string,
    releaseYear: number,
    title: string
}

export type PlayList = {
    tracks: Track[]
}

export type Author = {
    music?: string,
    text?: string
}

export type Track = {
    title: string,
    author?: Author,
    text?: string
    description?: string
    url?: string
}

export type Member = {
    name: string,
    link?: string,
    description?: string
}

export type AlbumDescription = {
    description?: string[],
    members?: Member[]
}
