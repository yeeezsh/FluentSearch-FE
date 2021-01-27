import { Album } from '../album';
import { Tag } from '../tags';

export type Photo = {
  _id: string;
  label: string;
  tags?: Tag[];
  albumId?: Album['_id'];
  createAt: Date;
  updateAt: Date;
  meta: MetaPhoto;
  description?: string;
};

export type MetaPhoto = {
  filename: string;
  extension: string;
  width: number;
  height: number;
  filesize: number; // bytes
  dpi: number | 72; // deph per inchs
  placeString?: string;
};
