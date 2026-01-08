import * as S from './style';
import { popularHot } from '@/constants/popularHot.constants';
import { Title } from '../Text';
import QuestionItem from '../QuestionItem';

function PopularHot() {
  return (
    <S.Container>
      <Title size="md" weight="bold">
        🔥 지금 뜨거운 Q&A
      </Title>
      <S.QuestionsList>
        {popularHot.data.map((item, key) => (
          <QuestionItem item={item} index={key}></QuestionItem>
        ))}
      </S.QuestionsList>
    </S.Container>
  );
}

export default PopularHot;
