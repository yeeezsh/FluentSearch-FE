export const INSTANT_SEARCH = 'INSTANT_SEARCH';

export type InstantSearchReducer = {
  autocomplete: string[];
  result: { _id: string }[];
  word: string;
  loading: boolean;
};
