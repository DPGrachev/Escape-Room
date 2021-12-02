import * as S from './genre-item.styled';
import { GenresTranslate, GenresImage } from 'const';

const GenreItem = ({genreName}) => {

  return (
    <S.TabItem>
      <S.TabBtn isActive>
        {GenresImage[genreName]}
        <S.TabTitle>{GenresTranslate[genreName]}</S.TabTitle>
      </S.TabBtn>
    </S.TabItem>
  )
};

export default GenreItem;
