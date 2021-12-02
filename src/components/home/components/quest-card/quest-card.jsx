import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quest-card.styled';

const QuestCard = ({title, previewImg, level, peopleCount}) => {
  const [minPeopleCount, maxPeopleCount] = peopleCount;

  return (
    <S.QuestItem>
        <S.QuestItemLink to="/quest">
          <S.Quest>
            <S.QuestImage
              src={previewImg}
              width="344"
              height="232"
              alt="квест Склеп"
            />

            <S.QuestContent>
              <S.QuestTitle>{title}</S.QuestTitle>

              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  {minPeopleCount}–{maxPeopleCount} чел
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  {level}
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
      </S.QuestItem>
  )
}

export default QuestCard;
