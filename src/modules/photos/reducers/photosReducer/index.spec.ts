import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { PhotosAPI } from 'Modules/photos/constants/photo/interface';
import { fetchPhotosData } from './actions';
import photosReducer, { photosActions } from './index';
import { initPhotosState } from './init';

const rootReducer = combineReducers({
  photos: photosReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

describe('photoReducer test', () => {
  it('it should correctly define initial state', () => {
    store.dispatch(photosActions.init());
    const result = store.getState().photos;
    expect(result).toEqual(initPhotosState);
  });

  it('should have pending/fulfill fetchPhotosData', async () => {
    store.dispatch({
      type: fetchPhotosData.fulfilled.type,
      payload: { data: mockdata },
    });
    expect(store.getState().photos.data.ready).toBe(true);
  });

  it('Should able to select photo from data', () => {
    const expectedId = 'gd0US-3s-KM';
    store.dispatch(photosActions.selectPhotos({ photoId: expectedId, albumId: '' }));
    expect(store.getState().photos.presentation.views?.photo?._id).toBe(expectedId);
  });
});

const mockdata = ([
  {
    id: 'gd0US-3s-KM',
    created_at: '2021-01-11T09:50:05-05:00',
    updated_at: '2021-01-27T03:46:37-05:00',
    promoted_at: '2021-01-11T12:48:01-05:00',
    width: 5191,
    height: 3461,
    color: '#262626',
    blur_hash: 'L042PDoeIUV@%MWBjtRj00t7t6j]',
    description: null,
    alt_description: 'white flowers on black background',
    urls: {
      raw:
        'https://images.unsplash.com/photo-1610375550819-e4bd8d698a49?ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1',
      full:
        'https://images.unsplash.com/photo-1610375550819-e4bd8d698a49?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=85',
      regular:
        'https://images.unsplash.com/photo-1610375550819-e4bd8d698a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1610375550819-e4bd8d698a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1610375550819-e4bd8d698a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=200',
    },
    links: {
      self: 'https://api.unsplash.com/photos/gd0US-3s-KM',
      html: 'https://unsplash.com/photos/gd0US-3s-KM',
      download: 'https://unsplash.com/photos/gd0US-3s-KM/download',
      download_location: 'https://api.unsplash.com/photos/gd0US-3s-KM/download',
    },
    categories: [],
    likes: 55,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: 'ZK_E-Z9fbEw',
      updated_at: '2021-01-27T10:21:44-05:00',
      username: 'emkaay',
      name: 'Manuel Keller',
      first_name: 'Manuel',
      last_name: 'Keller',
      twitter_username: null,
      portfolio_url: 'http://www.manuel-keller.de',
      bio:
        'german designer, pro-procrastinator, sleep-addict and hopeless romantic. Loves #000000 / #FFFFFF more than you do. Seriously.',
      location: null,
      links: [],
      profile_image: [],
      instagram_username: 'emkaay666',
      total_collections: 3,
      total_likes: 34,
      total_photos: 39,
      accepted_tos: true,
    },
    exif: {
      make: 'SONY',
      model: 'ILCE-6400',
      exposure_time: '1/200',
      aperture: '4',
      focal_length: '70.0',
      iso: 1000,
    },
    location: {
      title: 'Randersacker, Deutschland',
      name: 'Randersacker, Deutschland',
      city: 'Randersacker',
      country: 'Deutschland',
      position: [],
    },
    views: 512071,
    downloads: 4170,
  },
  {
    id: 'E8euHYBHRh8',
    created_at: '2021-01-12T12:33:32-05:00',
    updated_at: '2021-01-27T13:22:28-05:00',
    promoted_at: '2021-01-12T12:45:03-05:00',
    width: 4000,
    height: 6000,
    color: '#262626',
    blur_hash: 'LHB{}$ELIoxa8wE1fks:_3W;WBt7',
    description: null,
    alt_description: 'person wearing brown and black hiking shoe',
    urls: {
      raw:
        'https://images.unsplash.com/photo-1610471650881-7a5faa19f466?ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1',
      full:
        'https://images.unsplash.com/photo-1610471650881-7a5faa19f466?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=85',
      regular:
        'https://images.unsplash.com/photo-1610471650881-7a5faa19f466?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1610471650881-7a5faa19f466?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1610471650881-7a5faa19f466?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=200',
    },
    links: {
      self: 'https://api.unsplash.com/photos/E8euHYBHRh8',
      html: 'https://unsplash.com/photos/E8euHYBHRh8',
      download: 'https://unsplash.com/photos/E8euHYBHRh8/download',
      download_location: 'https://api.unsplash.com/photos/E8euHYBHRh8/download',
    },
    categories: [],
    likes: 18,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: 'H39kP5YQVmM',
      updated_at: '2021-01-26T07:13:10-05:00',
      username: 'maceylarie',
      name: 'Macey Bundt',
      first_name: 'Macey',
      last_name: 'Bundt',
      twitter_username: null,
      portfolio_url: 'http://www.maceybundt.com',
      bio:
        'Marketing Specialist I Photographer I Videographer\r\n' +
        "Thanks for using my photos! If you want, credit me by using the tag @maceylarie or for our Maine Coon Lux's page, @luxmainecoon ",
      location: 'Wisconsin',
      links: [],
      profile_image: [],
      instagram_username: 'maceylarie',
      total_collections: 2,
      total_likes: 19,
      total_photos: 39,
      accepted_tos: true,
    },
    exif: {
      make: 'SONY',
      model: 'ILCE-7M3',
      exposure_time: '1/160',
      aperture: '1.8',
      focal_length: '50.0',
      iso: 50,
    },
    location: {
      title: 'Oregon, USA',
      name: 'Oregon, USA',
      city: null,
      country: 'United States',
      position: [],
    },
    views: 554038,
    downloads: 1114,
  },
  {
    id: 'A2m-9Yy12-s',
    created_at: '2021-01-12T23:57:14-05:00',
    updated_at: '2021-01-27T09:22:42-05:00',
    promoted_at: '2021-01-14T06:12:04-05:00',
    width: 6720,
    height: 4480,
    color: '#d9d9d9',
    blur_hash: 'LaN0;y%$s,xu?^s:WBbHMxRPxut7',
    description: 'A nice bright bedroom decor',
    alt_description: 'white bed linen on bed',
    urls: {
      raw:
        'https://images.unsplash.com/photo-1610513492570-914a65a5d5ae?ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1',
      full:
        'https://images.unsplash.com/photo-1610513492570-914a65a5d5ae?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=85',
      regular:
        'https://images.unsplash.com/photo-1610513492570-914a65a5d5ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1610513492570-914a65a5d5ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1610513492570-914a65a5d5ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=200',
    },
    links: {
      self: 'https://api.unsplash.com/photos/A2m-9Yy12-s',
      html: 'https://unsplash.com/photos/A2m-9Yy12-s',
      download: 'https://unsplash.com/photos/A2m-9Yy12-s/download',
      download_location: 'https://api.unsplash.com/photos/A2m-9Yy12-s/download',
    },
    categories: [],
    likes: 43,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: '4OPTMrypU3g',
      updated_at: '2021-01-27T14:28:18-05:00',
      username: 'chshashi30',
      name: 'Shashi Ch',
      first_name: 'Shashi',
      last_name: 'Ch',
      twitter_username: null,
      portfolio_url: 'https://www.instagram.com/thephotographermom/',
      bio:
        'I am a stock photographer focused on health and wellness. I also do family photography. ',
      location: null,
      links: [],
      profile_image: [],
      instagram_username: 'thephotographermom',
      total_collections: 0,
      total_likes: 7,
      total_photos: 48,
      accepted_tos: true,
    },
    exif: {
      make: null,
      model: null,
      exposure_time: null,
      aperture: null,
      focal_length: null,
      iso: null,
    },
    location: {
      title: null,
      name: null,
      city: null,
      country: null,
      position: [],
    },
    views: 311612,
    downloads: 3236,
  },
  {
    id: 'NV-2IV74iJU',
    created_at: '2021-01-13T04:28:32-05:00',
    updated_at: '2021-01-27T07:19:52-05:00',
    promoted_at: '2021-01-13T05:27:03-05:00',
    width: 4109,
    height: 6163,
    color: '#f3f3f3',
    blur_hash: 'LeIhmh-=t7M{9GaeWBax4TM{M{of',
    description: 'Analog point and shoot camera on table\n',
    alt_description: 'black and silver camera on white table',
    urls: {
      raw:
        'https://images.unsplash.com/photo-1610530096354-e5da74e8062d?ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1',
      full:
        'https://images.unsplash.com/photo-1610530096354-e5da74e8062d?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=85',
      regular:
        'https://images.unsplash.com/photo-1610530096354-e5da74e8062d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1610530096354-e5da74e8062d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1610530096354-e5da74e8062d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=200',
    },
    links: {
      self: 'https://api.unsplash.com/photos/NV-2IV74iJU',
      html: 'https://unsplash.com/photos/NV-2IV74iJU',
      download: 'https://unsplash.com/photos/NV-2IV74iJU/download',
      download_location: 'https://api.unsplash.com/photos/NV-2IV74iJU/download',
    },
    categories: [],
    likes: 24,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: 'CU0kB_aF_X4',
      updated_at: '2021-01-27T12:43:19-05:00',
      username: 'maybejensen',
      name: 'Lasse Jensen',
      first_name: 'Lasse',
      last_name: 'Jensen',
      twitter_username: 'maybejensen',
      portfolio_url: 'http://maybejensen.com',
      bio:
        '📍Odense / Denmark\r\n' +
        'I create marketing images that sell products and ideas. Photography / 3D Illustrations',
      location: 'Denmark',
      links: [],
      profile_image: [],
      instagram_username: 'maybejensen',
      total_collections: 0,
      total_likes: 69,
      total_photos: 29,
      accepted_tos: true,
    },
    exif: {
      make: 'FUJIFILM',
      model: 'X-T4',
      exposure_time: '1/50',
      aperture: '2.0',
      focal_length: '35.0',
      iso: 640,
    },
    location: {
      title: null,
      name: null,
      city: null,
      country: null,
      position: [],
    },
    views: 360878,
    downloads: 1078,
  },
  {
    id: 'mZ7ZsqrG4is',
    created_at: '2021-01-15T21:50:40-05:00',
    updated_at: '2021-01-27T14:18:09-05:00',
    promoted_at: '2021-01-16T05:54:02-05:00',
    width: 2060,
    height: 2575,
    color: '#a6a6a6',
    blur_hash: 'LBAAaat7M{9F~qWBIUofD%WBD%%M',
    description: null,
    alt_description: 'woman in black suit jacket sitting on seat',
    urls: {
      raw:
        'https://images.unsplash.com/photo-1610765431323-d88c88a2b2c8?ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1',
      full:
        'https://images.unsplash.com/photo-1610765431323-d88c88a2b2c8?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=85',
      regular:
        'https://images.unsplash.com/photo-1610765431323-d88c88a2b2c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1610765431323-d88c88a2b2c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1610765431323-d88c88a2b2c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTc2MTh8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=200',
    },
    links: {
      self: 'https://api.unsplash.com/photos/mZ7ZsqrG4is',
      html: 'https://unsplash.com/photos/mZ7ZsqrG4is',
      download: 'https://unsplash.com/photos/mZ7ZsqrG4is/download',
      download_location: 'https://api.unsplash.com/photos/mZ7ZsqrG4is/download',
    },
    categories: [],
    likes: 48,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: 'qvghZd64Lhw',
      updated_at: '2021-01-27T14:33:15-05:00',
      username: 'happyfaceemoji',
      name: 'H.F.E & CO',
      first_name: 'H.F.E & CO',
      last_name: null,
      twitter_username: null,
      portfolio_url: 'https://www.hfeandco.com',
      bio: 'Fashion & Beauty Photographer\r\nInstagram: @_happyfaceemoji',
      location: 'Vancouver, Canada',
      links: [],
      profile_image: [],
      instagram_username: '_happyfaceemoji',
      total_collections: 0,
      total_likes: 0,
      total_photos: 298,
      accepted_tos: true,
    },
    exif: {
      make: null,
      model: null,
      exposure_time: null,
      aperture: null,
      focal_length: null,
      iso: null,
    },
    location: {
      title: null,
      name: null,
      city: null,
      country: null,
      position: [],
    },
    views: 205791,
    downloads: 805,
  },
].map((el) => ({ ...el, _id: el.id })) as unknown) as PhotosAPI[];
