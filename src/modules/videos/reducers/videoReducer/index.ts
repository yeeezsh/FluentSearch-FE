import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlaybackRate } from 'Modules/videos/models/types';
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
      state.present.playing = !state.present.playing;
    },
    setMuted(state) {
      state.present.muted = !state.present.muted;
    },
    setVolume(state, action: PayloadAction<{ volume: number; muted: boolean }>) {
      const { volume, muted } = action.payload;
      state.present.volume = volume;
      state.present.muted = muted;
    },
    setProgress(state, action: PayloadAction<{ played: number }>) {
      const { played } = action.payload;
      state.present.played = played;
    },
    setPlaybackRate(state, action: PayloadAction<{ playbackRate: PlaybackRate }>) {
      const { playbackRate } = action.payload;
      state.present.playbackRate = playbackRate;
    },
  },
});
export default videoSlice.reducer;
export const videoActions = videoSlice.actions;
