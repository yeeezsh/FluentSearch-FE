import { Sync, each } from 'factory.ts';
import faker from 'faker';
import { makeArray } from 'Utils/makeArray';
import { AlbumPreviewProps } from '../components/AlbumPreview/types';
import { ModelEnum } from '../constants/model.enum';
import { DashboardData } from '../models/types';

const DashboardMock = Sync.makeFactory<DashboardData>({
  totalPhotos: each(() => faker.random.number()),
  totalVideos: each(() => faker.random.number()),
  todayPhotos: each(() => faker.random.number()),
  todayVideos: each(() => faker.random.number()),
  upcomingModel: each(() => faker.random.word()),
  model: each(() => faker.random.arrayElement(Object.values(ModelEnum))),
  processWithModelPhoto: each(() => faker.random.number()),
  finishRunningPhotos: each(() => faker.random.number()),
  totalRunningPhotos: each(() => faker.random.number()),
  progressPhoto: each(() => faker.random.number()),
});

const AlbumPreviewMock = Sync.makeFactory<AlbumPreviewProps>({
  src: each(() => faker.image.imageUrl()),
  albumName: each(() => faker.random.word()),
  albumLength: each(() => faker.random.number()),
  label: each(() => makeArray(3, faker.random.word)),
  link: each(() => faker.random.word()),
});

export const DashboardMockData: DashboardData = DashboardMock.build();
export const AlbumPreviewMockData: AlbumPreviewProps[] = AlbumPreviewMock.buildList(4);
