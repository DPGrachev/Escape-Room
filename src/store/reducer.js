import { createReducer } from "@reduxjs/toolkit";
import { Genres } from "const";
import { setCurrentGenre, setCurrentQuest, setQuests } from "./actions";

const initialState = {
  quests: [],
  currentGenre : Genres.AllQuests,
  currentQuest: {},
};

const reducer = createReducer(initialState,(builder) => {
  builder
    .addCase(setQuests, (state, action) => {
      state.quests = action.payload.quests;
    })
    .addCase(setCurrentGenre, (state, action) => {
      state.currentGenre = action.payload.currentGenre;
    })
    .addCase(setCurrentQuest, (state, action) => {
      state.currentQuest = action.payload.currentQuest;
    })
});

export {reducer};
