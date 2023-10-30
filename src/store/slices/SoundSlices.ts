import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { SoundList } from "../../data/soundList";

const initialState = {
  soundList: SoundList,
  loader: false,
  error: null,
};

const SoundSlices = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {},
});

export const SoundSelector = {
  getSoundList: (state: RootState) => state.SoundList.soundList,
};

// export const { changeBackground, changeGrid, changeCell } = SoundSlices.actions;
export default SoundSlices;
