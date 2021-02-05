import { PhotosAPI } from '../constants/photo/interface';

export const mockData: PhotosAPI[] = [
  {
    id: '12345',
    created_at: '',
    updated_at: '',

    width: 4000,
    height: 6000,

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
        'https://images.unsplash.com/photo-1612476957058-3328f66cbea7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
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
        result: 'cake',
        xMin: 837,
        xMax: 1266,
        yMin: 2483,
        yMax: 1451,
      },
      {
        result: 'cake',
        xMin: 2248,
        xMax: 1266,
        yMin: 2864,
        yMax: 1451,
      },
    ],
  },
  {
    id: '12346',
    created_at: '',
    updated_at: '',

    width: 6048,
    height: 4024,

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
        xMin: 2182,
        xMax: 1738,
        yMin: 1099,
        yMax: 1669,
      },
    ],
  },
];
