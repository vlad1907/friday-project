import { THEME } from "enums/theme";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  theme: THEME.LIGHT
};

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeThemeAC: (state, action: PayloadAction<{ theme: THEME }>) => {
      state.theme = action.payload.theme;
    }
  }
});

export const themeReducer = slice.reducer;
export const { changeThemeAC } = slice.actions;