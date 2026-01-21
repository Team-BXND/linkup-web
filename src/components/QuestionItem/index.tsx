import type { PostData } from "@/types/postResponse";
import * as S from "./style";
import { Body, Caption, Title } from "../common/Text";
import Like from "@/assets/Post/Like.svg";
import Comment from "@/assets/Post/Comment.svg";
import Category from "@/assets/Post/Category.svg";

function QuestionItem({
  item,
  index,
  showRank,
}: {
  item: PostData;
  index: number;
  showRank: boolean;
}) {
  return (
    <S.Question key={item.id}>
      {showRank && (
        <S.RankBadge>
          <Body size="md" weight="semibold">
            {index + 1}
          </Body>
        </S.RankBadge>
      )}
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
          <S.MetaItem>
            <S.Icon src={Category} />
            <Caption size="md" weight="medium">
              {`${item.category}`}
            </Caption>
          </S.MetaItem>
          <S.MetaItem>
            <S.Icon src={Like} />
            <Caption size="md" weight="medium">
              {`유용해요 ${item.like}`}
            </Caption>
          </S.MetaItem>
          <S.MetaItem>
            <S.Icon src={Comment} />
            <Caption
              size="md"
              weight="medium"
            >{`답변수 ${item.commentCount}`}</Caption>
          </S.MetaItem>
        </S.ContentMetaInfo>
      </S.QuestionContent>
    </S.Question>
  );
}

export default QuestionItem;
