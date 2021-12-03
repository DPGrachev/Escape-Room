import { setQuests } from "./actions";

const fetchQuestsAction = () =>
  async (dispatch, _getState, api) => {
    await api.get('/quests')
      .then((response) => dispatch(setQuests(response.data)));
  };

export {fetchQuestsAction};
