import * as S from './quests-catalog.styled';
import QuestCard from '../quest-card/quest-card';
import { quests } from 'mock/mock';
import { Genres } from 'const';
import GenreItem from '../genre-item/genre-item';
import { useSelector } from "react-redux";
import { getCurrentGenre } from 'store/selectors';

const QuestsCatalog = () => {
  const currentGenre = useSelector(getCurrentGenre);

  return (
    <>
      <S.Tabs>
        {Object.values(Genres).map(genre => <GenreItem key={genre} genreName={genre} isCurrentGenre={currentGenre === genre} />)}
      </S.Tabs>

      <S.QuestsList>
        {quests.map(quest => <QuestCard key={quest.id} title={quest.title} previewImg={quest.previewImg} level={quest.level} peopleCount={quest.peopleCount}/> )}
      </S.QuestsList>
    </>
  )
};

export default QuestsCatalog;
