import { createReducer } from "@reduxjs/toolkit";
import { Genres } from "const";
import { setCurrentGenre } from "./actions";

const initialState = {
  currentGenre : Genres.AllQuests,
};

const reducer = createReducer(initialState,(builder) => {
  builder
    .addCase(setCurrentGenre, (state, action) => {
      state.currentGenre = action.payload.currentGenre;
    })
});

export {reducer};
