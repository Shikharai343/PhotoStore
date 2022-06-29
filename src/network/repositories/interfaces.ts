export interface IImageData {
    data: IImageResponse
}

export interface IImageResponse {
    id: number;
    thumbnail: string;
    created: number;
    created_utc: number;
    url: string;
    title: string;
    author: string;
    total_awards_received: number;
    thumbnail_height: number;
    thumbnail_width: number;
}