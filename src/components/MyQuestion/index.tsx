import * as S from './style';
import { Title, Caption } from '../Text';
import type { ProfileMyQuestion } from '@/types/profile';
import MyQuestionItem from '../MyQuestionItem';
import { myQuestion } from '@/constants/profile.constants.ts';

function MyQuestion({item}: {item: ProfileMyQuestion}) {
  return (
    <S.MyQuestion>
      <S.TitleCover>
        <Title size="md" weight="bold">내 질문</Title>
          <S.More>
            <Caption size="sm" weight='medium'>더보기</Caption>
          </S.More>
        </S.TitleCover>

        <S.DetailCover>
          {myQuestion.data.map((item) => (
            <MyQuestionItem key={item.id} item={item} />
          ))}
        </S.DetailCover>
    </S.MyQuestion>
  )
}

export default MyQuestion;