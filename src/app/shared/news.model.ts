export interface Content {
    entity: number;
    type: string;
    width: number;
    height: number;
    url: string;
    text: string;
    poster: string;
}

export interface Img {
    entity: number;
    width: number;
    height: number;
    type: string;
    url: string;
}

export interface Video {
    url: string;
    height: number;
    width: number;
    text: string;
    poster: string;
}

export interface GalleryImage {
    url: string;
    type: string;
    entity: number;
    width: number;
    height: number;
    description: string;
}

export interface Detail {
    contents: Content[];
    id: string;
    url: string;
    title: string;
    description: string;
    img: Img;
    modifiedDateTime: Date;
    publishDateTime: Date;
    author: string;
    logo: string;
    v: string;
    video: Video;
    galleryThumbImages: string[];
    galleryImages: GalleryImage[];
}

export interface NewsItem {
    title: string;
    imgurl: string;
    url: string;
    channel: string;
    category: number;
    channelCode: number;
    logo: string;
    detail: Detail;
    description: string;
}

