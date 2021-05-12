import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MetaDataType, PlaybackRate, VideoFileType } from 'Modules/videos/models/types';
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
    setFetchVideoData(state) {
      const metaData = state.videoFile;
      state.present.metaData.date = metaData.date;
      state.present.metaData.format = metaData.format;
      state.present.metaData.height = metaData.height;
      state.present.metaData.originalFileName = metaData.originalFileName;
      state.present.metaData.place = metaData.place;
      state.present.metaData.size = metaData.size;
      state.present.metaData.type = metaData.type;
      state.present.metaData.width = metaData.width;
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
        state.videoFile = { ...data };
      },
    );
  },
});
export default videoSlice.reducer;
export const videoActions = videoSlice.actions;
