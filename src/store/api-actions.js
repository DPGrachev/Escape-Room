import { Genres } from "const";
import { setCurrentQuest, setQuests } from "./actions";
import {toast} from 'react-toastify';

const SUCCES_SEND_ORDER_MESSAGE = 'Ваш заказ отправлен';
const ERROR_SEND_ORDER_MESSAGE = 'Ошибка отправки заказа';

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

const sendNewOrderAction = (orderPost, closeForm) =>
  async (_dispatch, _getState, api) => {
    try{
      await api.post('/orders', orderPost)
      .then((response) => {
        console.log(response)
        if(response){
          toast.info(SUCCES_SEND_ORDER_MESSAGE);
          closeForm();
        }
      });
    } catch {
      toast.error(ERROR_SEND_ORDER_MESSAGE)
    }
  };

export {fetchQuestsAction, fetchCurrentQuestAction, sendNewOrderAction};
