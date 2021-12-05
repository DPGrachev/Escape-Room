import { Genres } from "const";
import { setCurrentQuest, setQuests } from "./actions";

const GenresAdapter = {
  'adventures' : Genres.Adventures,
  'horror': Genres.Horrors,
  'mystic': Genres.Mystic,
  'detective': Genres.Detective,
  'sci-fi': Genres.Scifi,
}

const adaptQuestsToClient = (quest) => {
  return {...quest, type : GenresAdapter[quest.type]}
}

const fetchQuestsAction = () =>
  async (dispatch, _getState, api) => {
    await api.get('/quests')
      .then((response) => response.data.map(quest => adaptQuestsToClient(quest)))
      .then((response) => dispatch(setQuests(response)));
  };

const fetchCurrentQuestAction = (questId) =>
  async (dispatch, _getState, api) => {
    await api.get(`/quests/${questId}`)
      .then(response => adaptQuestsToClient(response.data))
      .then(response => dispatch(setCurrentQuest(response)));
  };

export {fetchQuestsAction, fetchCurrentQuestAction};
