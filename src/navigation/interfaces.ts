import { IImageResponse } from "../network/repositories/interfaces";

export interface IParams {
    data: IImageResponse
}

export interface INavigation {
    name: string;
    params: IParams;
}