import { InjectionToken } from '@angular/core';
export interface Api {
    getItems: string;
    getItem: string;
}
export const BASE = 'http://localhost:1337/';
export const API = new InjectionToken('API');

export const apiConfig: Api = {
    getItems: BASE + '',
    getItem: BASE + ''
}