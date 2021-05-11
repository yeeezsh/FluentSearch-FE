import { configureStore } from '@reduxjs/toolkit';
import { strictEqual } from 'assert';
import { combineReducers } from 'redux';
import videoReducer, { videoActions } from '.';
import { initVideoState } from './init';

const rootReducer = combineReducers({
  video: videoReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

describe('reducers/videoReducer test', () => {
  beforeEach(() => {
    store.dispatch(videoActions.init());
  });

  it('it should correctly define initial state', () => {
    store.dispatch(videoActions.init());
    const result = store.getState().video;
    expect(result).toEqual(initVideoState);
  });

  it('it should set playing correctly ', () => {
    store.dispatch(videoActions.setPlaying());
    const result = store.getState().video.present.player.playing;
    expect(result).toEqual(true);
  });

  it('it should set muted correctly', () => {
    store.dispatch(videoActions.setMuted());
    const result = store.getState().video.present.player.muted;
    expect(result).toEqual(true);
  });

  it('it should set volume correctly ', () => {
    store.dispatch(videoActions.setVolume({ volume: 99 / 100, muted: false }));
    const resultVolume = store.getState().video.present.player.volume;
    const resultMuted = store.getState().video.present.player.muted;
    expect(resultVolume).toEqual(0.99);
    expect(resultMuted).toEqual(true);
  });
});
