import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';

const Genres = {
  AllQuests: 'AllQuests',
  Adventures : 'Adventures',
  Horrors: 'Horrors',
  Mystic: 'Mystic',
  Detective: 'Detective',
  Scifi: 'Scifi',
};

const GenresTranslate = {
  [Genres.AllQuests]: 'Все квесты',
  [Genres.Adventures]: 'Приключения',
  [Genres.Horrors]: 'Ужасы',
  [Genres.Mystic]: 'Мистика',
  [Genres.Detective]: 'Детектив',
  [Genres.Scifi]: 'Sci-fi',
}

const GenresImage = {
  [Genres.AllQuests]: <IconAllQuests />,
  [Genres.Adventures]: <IconAdventures />,
  [Genres.Horrors]: <IconHorrors />,
  [Genres.Mystic]: <IconMystic />,
  [Genres.Detective]: <IconDetective />,
  [Genres.Scifi]: <IconScifi />,
}

const ActionType = {
  setCurrentGenre: 'main/set-current-genre',
}

export {Genres, GenresTranslate, GenresImage, ActionType};