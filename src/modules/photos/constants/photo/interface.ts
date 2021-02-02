export interface Photos {
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
  location: Location;
  urls: URL;
  links: Link;
  user: User;
}
export interface Location {
  name: string;
  city: string;
  country: string;
  title?: string;
}
export interface URL {
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
