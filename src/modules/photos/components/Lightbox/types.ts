import {
  FileInsightMeta,
  InsightBBox,
  InsightModelEnum,
  RecentFile,
} from '../../../../common/generated/generated-types';

export type LightboxPropsType = {
  closeLightbox: () => void;
  image: RecentFile;
  onPrev: (e: React.MouseEvent<HTMLElement>) => void;
  onNext: (e: React.MouseEvent<HTMLElement>) => void;
};

export type currentImageSizeType = {
  width: number;
  height: number;
};

export type FileInsightMetaData = Omit<
  FileInsightMeta,
  '__typename' | 'owner' | 'original_filename' | 'type' | 'createAt' | 'updateAt'
>;

export type Insights = {
  _id: string;
  model: InsightModelEnum;
  keyword: string;
  bbox?: InsightBBox;
};

export type FileInsight = {
  fileMeta: FileInsightMetaData;
  insights: Insights[];
};
