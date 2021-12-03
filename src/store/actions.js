import { createAction } from "@reduxjs/toolkit";
import { ActionType } from "const";

const setCurrentGenre = createAction(
  ActionType.setCurrentGenre,
  (genre) => ({
    payload: {
      currentGenre: genre,
    }
  })
)

export {setCurrentGenre};
