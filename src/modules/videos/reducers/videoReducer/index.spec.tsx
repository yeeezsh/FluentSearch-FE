import { configureStore } from '@reduxjs/toolkit';
import { videoFile } from 'Modules/videos/mocks/videoFile';
import { combineReducers } from 'redux';
import videoReducer, { videoActions } from '.';
import { fetchVideoData } from './actions';
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
    expect(resultMuted).toEqual(false);
  });

  it('it should set progress correctly', () => {
    store.dispatch(videoActions.setProgress({ played: 99 }));
    const result = store.getState().video.present.player.played;
    expect(result).toEqual(99);
  });

  it('it should set playback rate correctly', () => {
    store.dispatch(videoActions.setPlaybackRate({ playbackRate: '2.0' }));
    const result = store.getState().video.present.player.playbackRate;
    expect(result).toEqual('2.0');
  });

  it('it should set full screen correctly', () => {
    store.dispatch(videoActions.setFullScreen());
    const result = store.getState().video.present.player.fullscreen;
    expect(result).toEqual(true);
  });

  it('it should set video file correctly', () => {
    store.dispatch({
      type: fetchVideoData.fulfilled.type,
      payload: { data: videoFile },
    });

    const expectedResult = {
      originalFileName: 'Jujutsu Kaisen',
      size: 26530018,
      type: 'undefined',
      format: '.jpg',
      width: 1200,
      height: 800,
      date: 'Wed May 12 2021 23:06:42 GMT+0700 (Indochina Time)',
      place: 'Jujutsu Academy',
    };

    const result = store.getState().video.videoFile;
    const resultMetaData = store.getState().video.present.metaData;

    expect(result).toEqual(videoFile);
    expect(resultMetaData).toEqual(expectedResult);
  });

  it('it should set duration correctly', () => {
    store.dispatch(videoActions.setDuration({ duration: 50 }));
    const result = store.getState().video.present.player.duration;
    expect(result).toEqual(50);
  });

  it('it should set timeDisplayFormat correctly', () => {
    store.dispatch(videoActions.setTimeDisplayFormat({ format: 'remaining' }));
    const result = store.getState().video.present.player.timeDisplayFormat;
    expect(result).toEqual('remaining');
  });
});
