import { Genres } from 'const';
import { createSelector } from 'reselect';

const getCurrentGenre = (state) => state.currentGenre;
const getQuests = (state) => state.quests;

const getQuestsInCurrentGenre = createSelector(
  getQuests,
  getCurrentGenre,
  ( quests, currentGenre) => {
    if(currentGenre === Genres.AllQuests){
      return quests;
    }
    return quests.filter((quest) => quest.type === Genres[currentGenre]);
  }
);


export {getCurrentGenre, getQuestsInCurrentGenre};
