import type { PopularHotItem } from '@/types/popularHot';
import * as S from './style';
import { Body, Caption, Title } from '../Text';

function QuestionItem({
  item,
  index,
}: {
  item: PopularHotItem;
  index: number;
}) {
  return (
    <S.Question key={item.id}>
      <S.RankBadge>
        <Body size="md" weight="semibold">
          {index + 1}
        </Body>
      </S.RankBadge>
      <S.QuestionContent>
        <S.ContentTitle>
          <Title size="xsm" weight="bold">
            {item.title}
          </Title>
        </S.ContentTitle>
        <S.ContentPreview>
          <Body size="sm" weight="semibold">
            {item.preview}
          </Body>
        </S.ContentPreview>

        <S.ContentMetaInfo>
          <S.AnswerIcon />
          <Caption size="md" weight="medium">
            {`유용해요 ${item.like}`}
          </Caption>
          <S.AnswerIcon />
          <Caption
            size="md"
            weight="medium"
          >{`답변수 ${item.commentCount}`}</Caption>
        </S.ContentMetaInfo>
      </S.QuestionContent>
    </S.Question>
  );
}

export default QuestionItem;
