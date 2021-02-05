import { Tag } from 'Modules/photos/models/tags';

// TODO: deprecate this interface
export interface PhotosAPI {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  downloads: number;
  likes: number;
  liked_by_user: boolean;
  description: string;
  location: LocationAPI;
  urls: URLAPI;
  links: Link;
  user: User;
  tags?: Tag[];
}
export interface LocationAPI {
  name: string;
  city: string;
  country: string;
  title?: string;
}
export interface URLAPI {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface Link {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface User {
  name: string;
  total_likes: number;
}
