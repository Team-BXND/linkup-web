import * as S from './style';
import { Title } from '../Text';
import QuestionItem from '../QuestionItem';
import { popularHot } from '@/constants/popularHot.constants';

function Popular() {
  const sliceItem = popularHot.data.slice(0, 3);
  return (
    <S.Container>
      <Title size="md" weight="bold">
        🔥 가장 유용했던 글
      </Title>
      {sliceItem.map((item, key) => (
        <QuestionItem item={item} index={key} showRank={false}></QuestionItem>
      ))}
    </S.Container>
  );
}

export default Popular;
