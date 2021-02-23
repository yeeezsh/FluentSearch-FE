import { PhotosAPI } from '../constants/photo/interface';

export const mockData: PhotosAPI[] = [
  {
    id: '12345',
    created_at: '',
    updated_at: '',

    width: 668,
    height: 1002,

    color: '',
    blur_hash: '',
    downloads: 0,
    likes: 0,
    liked_by_user: false,
    description: '',
    location: {
      name: '',
      title: '',
      city: '',
      country: '',
    },
    urls: {
      raw: '',
      full: '',
      regular: '',
      small: '',
      thumb:
        'https://images.unsplash.com/photo-1612293905838-667dea27cc79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    },
    links: {
      self: '',
      html: '',
      download: '',
      download_location: '',
    },
    user: {
      name: '',
      total_likes: 0,
    },
    tags: [
      {
        result: 'orange',
        xMin: 334,
        xMax: 200,
        yMin: 496,
        yMax: 320,
      },
      {
        result: 'orange',
        xMin: 334 - 200,
        xMax: 200 - 200,
        yMin: 496 - 200,
        yMax: 320 - 200,
      },
    ],
  },
  {
    id: '12346',
    created_at: '',
    updated_at: '',

    width: 1052,
    height: 700,

    color: '',
    blur_hash: '',
    downloads: 0,
    likes: 0,
    liked_by_user: false,
    description: '',
    location: {
      name: '',
      title: '',
      city: '',
      country: '',
    },
    urls: {
      raw: '',
      full: '',
      regular: '',
      small: '',
      thumb:
        'https://images.unsplash.com/photo-1558221221-e2d4f80ccaba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
    },
    links: {
      self: '',
      html: '',
      download: '',
      download_location: '',
    },
    user: {
      name: '',
      total_likes: 0,
    },
    tags: [
      {
        result: 'cat',
        xMin: 309,
        xMax: 387 + 309,
        yMin: 169,
        yMax: 305 + 169,
      },
    ],
  },
];
