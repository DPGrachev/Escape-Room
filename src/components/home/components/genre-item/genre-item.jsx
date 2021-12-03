import * as S from './genre-item.styled';
import { GenresTranslate, GenresImage, Genres } from 'const';
import { useDispatch } from "react-redux";
import { setCurrentGenre } from 'store/actions';

const GenreItem = ({genreName, isCurrentGenre}) => {
  const dispatch = useDispatch();
  const onGenreClick = () => dispatch(setCurrentGenre(Genres[genreName]));

  return (
    <S.TabItem>
      <S.TabBtn isActive={isCurrentGenre} onClick={onGenreClick}>
        {GenresImage[genreName]}
        <S.TabTitle >{GenresTranslate[genreName]}</S.TabTitle>
      </S.TabBtn>
    </S.TabItem>
  )
};

export default GenreItem;
