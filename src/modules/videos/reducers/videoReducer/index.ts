import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  MetaDataType,
  PlaybackRate,
  TimeDisplayFormat,
  VideoFileType,
} from 'Modules/videos/models/types';
import { ErrorStateCodeEnum } from 'Stores/common/types/error';
import { fetchVideoData } from './actions';
import { initVideoState } from './init';
import { VIDEO } from './types';

const videoSlice = createSlice({
  name: VIDEO,
  initialState: initVideoState,
  reducers: {
    init(state) {
      return { ...state, ...initVideoState };
    },
    setPlaying(state) {
      state.present.player.playing = !state.present.player.playing;
    },
    setMuted(state) {
      state.present.player.muted = !state.present.player.muted;
    },
    setVolume(state, action: PayloadAction<{ volume: number; muted: boolean }>) {
      const { volume, muted } = action.payload;
      state.present.player.volume = volume;
      state.present.player.muted = muted;
    },
    setProgress(state, action: PayloadAction<{ played: number }>) {
      const { played } = action.payload;
      state.present.player.played = played;
    },
    setPlaybackRate(state, action: PayloadAction<{ playbackRate: PlaybackRate }>) {
      const { playbackRate } = action.payload;
      state.present.player.playbackRate = playbackRate;
    },
    setFullScreen(state) {
      state.present.player.fullscreen = !state.present.player.fullscreen;
    },
    setDuration(state, action: PayloadAction<{ duration: number }>) {
      const { duration } = action.payload;
      state.present.player.duration = duration;
    },
    setTimeDisplayFormat(state, action: PayloadAction<{ format: TimeDisplayFormat }>) {
      const { format } = action.payload;
      state.present.player.timeDisplayFormat = format;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVideoData.rejected, (state) => {
      state.ready = false;
      state.error = {
        code: ErrorStateCodeEnum.ServerInternalError,
        msg: 'api error',
      };
    });
    builder.addCase(fetchVideoData.pending, (state) => {
      state.ready = false;
      state.error = undefined;
    });
    builder.addCase(
      fetchVideoData.fulfilled,
      (state, action: PayloadAction<{ data: VideoFileType }>) => {
        const { data } = action.payload;
        state.ready = true;
        state.error = undefined;
        state.videoFile = data;

        const metaData = Object.keys(data).reduce((accumulator, key) => {
          if (key !== 'deleteFlag' && key !== 'url') {
            accumulator[key] = data[key];
          }
          return accumulator;
        }, {}) as MetaDataType;
        state.present.metaData = metaData;
      },
    );
  },
});
export default videoSlice.reducer;
export const videoActions = videoSlice.actions;
