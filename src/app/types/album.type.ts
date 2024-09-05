export type Album = {
    author: string,
    teaser?: string,
    annotations?: string[],
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
    annotations?: string[],
    members?: Member[]
}

export type YoutubeVideo = {
    kind: string,
    etag: string,
    id: YoutubeVideoResourceId,
    snippet?: YoutubeVideoSnippet
}

export type YoutubeVideoResourceId = {
    kind: string,
    videoId: string,
}

export type YoutubeVideoPlayList = {
    id: string,
    title?: string,
    description?: string,
    snippet?: YoutubeVideoSnippet
}

export type YoutubeVideoSnippet = {
    channelId: string,
    channelTitle?:string,
    contentDetails?: {
        videoId: string,
        videoPublishedAt: string
    },
    description?: string,
    liveBroadcastContent?: string,
    playlistId: string,
    position?: number,
    publishedAt?: string,
    publishTime?: string,
    resourceId: YoutubeVideoResourceId,
    thumbnails?: {
        default?: YoutubeVideoThumbnail,
        medium?: YoutubeVideoThumbnail,
        high?: YoutubeVideoThumbnail,
        standard?: YoutubeVideoThumbnail,
        maxres?: YoutubeVideoThumbnail
    },
    title?: string,
    videoOwnerChannelId: string,
    videoOwnerChannelTitle?: string
}

export type YoutubeVideoThumbnail = {
    url: string,
    width: number,
    height: number
}
