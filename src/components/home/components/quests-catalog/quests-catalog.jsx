// import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
// import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
// import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
// import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
// import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
// import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import * as S from './quests-catalog.styled';
import QuestCard from '../quest-card/quest-card';
import { quests } from 'mock/mock';
import { Genres } from 'const';
import GenreItem from '../genre-item/genre-item';

const QuestsCatalog = () => (
  <>
    <S.Tabs>
      {Object.values(Genres).map(genre => <GenreItem key={genre} genreName={genre} />)}
    </S.Tabs>

    <S.QuestsList>
      {quests.map(quest => <QuestCard key={quest.id} title={quest.title} previewImg={quest.previewImg} level={quest.level} peopleCount={quest.peopleCount}/> )}
    </S.QuestsList>
  </>
);

export default QuestsCatalog;
