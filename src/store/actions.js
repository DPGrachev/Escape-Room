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

const setQuests = createAction(
  ActionType.setQuests,
  (quests) => ({
    payload: {
      quests: quests,
    }
  })
)

const setCurrentQuest = createAction(
  ActionType.setCurrentQuest,
  (quest) => ({
    payload: {
      currentQuest: quest,
    }
  })
)

export {setCurrentGenre, setQuests, setCurrentQuest};
