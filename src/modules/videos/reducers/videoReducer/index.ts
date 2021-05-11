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
  },
});
export default videoSlice.reducer;
export const videoActions = videoSlice.actions;
