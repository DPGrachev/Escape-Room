import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useParams } from 'react-router';
import { fetchCurrentQuestAction } from 'store/api-actions';
import { getCurrentQuest } from 'store/selectors';
import { GenresTranslate, questLevelTranslate } from 'const';

const DetailedQuest = () => {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const onCloseBookingBtnClick = () => {
    setIsBookingModalOpened(false);
  };

  const currentQuest = useSelector(getCurrentQuest);
  const params = useParams();
  const currentQuestId = params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentQuestAction(currentQuestId));
  }, [dispatch, currentQuestId])

  if(currentQuest.id !== Number(currentQuestId)){
    return <h1>Loading...</h1>;
  }

  const [minPeopleCount, maxPeopleCount] = currentQuest.peopleCount;

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${currentQuest.coverImg}`}
          alt={`Квест ${currentQuest.title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{currentQuest.title}</S.PageTitle>
            <S.PageSubtitle>{GenresTranslate[currentQuest.type]}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${currentQuest.duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${minPeopleCount}-${maxPeopleCount} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{questLevelTranslate[currentQuest.level]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>{currentQuest.description}</S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onCloseBookingBtnClick={onCloseBookingBtnClick}/>}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
