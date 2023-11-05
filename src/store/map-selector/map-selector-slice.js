import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  selectedMap: "Area",
  isAreaSideNavOpen: false,
  isCompanySideNavOpen: true,
  isCommoditySideNavOpen: true,
  currentSearchString: "",
};

const mapSelectorSlice = createSlice({
  name: "MapSelector",
  initialState,
  reducers: {
    setSelectedMap: (state, action) => {
      state.selectedMap = action.payload;
      state.currentSearchString = `?t=${action.payload}&sn=${state.isAreaSideNavOpen}`;
    },
    setIsAreaSideNavOpen: (state, action) => {
      state.isAreaSideNavOpen = action.payload;
      state.currentSearchString = `?t=${state.selectedMap}&sn=${action.payload}`;
    },
    setIsCompanySideNavOpen: (state, action) => {
      state.isCompanySideNavOpen = action.payload;
    },
    setIsCommoditySideNavOpen: (state, action) => {
      state.isCommoditySideNavOpen = action.payload;
    },
  },
});

export const {
  setSelectedMap,
  setIsAreaSideNavOpen,
  setIsCompanySideNavOpen,
  setIsCommoditySideNavOpen,
} = mapSelectorSlice.actions;

export default mapSelectorSlice.reducer;
