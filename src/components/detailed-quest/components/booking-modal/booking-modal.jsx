import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import {useDispatch} from 'react-redux';
import { sendNewOrderAction } from 'store/api-actions';
import { useRef } from 'react';

const PHONE_NUMBER_LENGTH = 10;

const BookingModal = ({onCloseBookingBtnClick}) => {
  const dispatch = useDispatch();
  const name = useRef(null);
  const phone = useRef(null);
  const playersCount = useRef(null);


  const onFormSubmit = (evt) => {
    evt.preventDefault();
    const orederPost = {
      name: name.current.value,
      peopleCount: Number(playersCount.current.value),
      phone: phone.current.value,
      isLegal: true
    }
    dispatch(sendNewOrderAction(orederPost, onCloseBookingBtnClick));
  }


  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={onCloseBookingBtnClick}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          id="booking-form"
          onSubmit={onFormSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              ref={name}
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              ref={phone}
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Введите 10 цифр вашего номера"
              maxLength={PHONE_NUMBER_LENGTH}
              minLength={PHONE_NUMBER_LENGTH}
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              ref={playersCount}
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
)};

export default BookingModal;
