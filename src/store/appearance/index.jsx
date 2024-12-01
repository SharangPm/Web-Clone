import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backgroundColor: {
    name: "dark",
    primary: "#000",
    secondary: "#202327",
  },
  color: {
    primary: "#3b82f6",
    secondary: "#8ecdf8",
    textColor: "#e7e9ea",
    textColorSecondary: "rgb(113, 118, 123)",
  },
  boxShadow:
    "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
  fontSize: 16,
  hover: "#e7e9ea1a",
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem("appearance");
  if (savedTheme) {
    return JSON.parse(savedTheme);
  }
  return initialState;
};

const appearance = createSlice({
  name: "appearance",
  initialState: loadTheme(),
  reducers: {
    _setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
      localStorage.setItem("appearance", JSON.stringify(state));
    },
    _setColor: (state, action) => {
      state.color = action.payload;
      localStorage.setItem("appearance", JSON.stringify(state));
    },
    _setBoxShadow: (state, action) => {
      state.boxShadow = action.payload;
      localStorage.setItem("appearance", JSON.stringify(state));
    },
    _setFontSize: (state, action) => {
      state.fontSize = action.payload;
      localStorage.setItem("appearance", JSON.stringify(state));
    },
    _setHover: (state, action) => {
      state.hover = action.payload;
      localStorage.setItem("appearance", JSON.stringify(state));
    },
  },
});

export const {
  _setBackgroundColor,
  _setColor,
  _setFontSize,
  _setBoxShadow,
  _setHover,
} = appearance.actions;

export default appearance.reducer;
