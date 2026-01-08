import * as S from './style';
import { popularHot } from '@/constants/popularHot.constants';
import { Caption, Body, Title } from '../Text';

function PopularHot() {
  return (
    <S.Container>
      <Title size="md" weight="bold">
        🔥 지금 뜨거운 Q&A
      </Title>
      <S.QuestionsList>
        {popularHot.data.map((item, key) => (
          <S.Question key={item.id}>
            <S.RankBadge>
              <Body size="md" weight="semibold"></Body>
              {key + 1}
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
                <S.AnswerWrapper>
                  <S.AnswerIcon></S.AnswerIcon>
                  <Caption size="md" weight="medium">
                    {`유용해요 ${item.like}`}
                  </Caption>
                </S.AnswerWrapper>
                <S.AnswerWrapper>
                  <S.AnswerIcon></S.AnswerIcon>
                  <Caption
                    size="md"
                    weight="medium"
                  >{`답변수 ${item.commentCount}`}</Caption>
                </S.AnswerWrapper>
              </S.ContentMetaInfo>
            </S.QuestionContent>
          </S.Question>
        ))}
      </S.QuestionsList>
    </S.Container>
  );
}

export default PopularHot;
