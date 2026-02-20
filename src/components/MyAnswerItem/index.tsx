import * as S from "./style";
import type { ProfileMyAnswer } from "@/types/profile";
import { Body, Caption } from "../common/Text";
import ProfileCategory from "../ProfileCategory";
import { useNavigate } from "react-router-dom";

function MyAnswerItem({ item }: { item: ProfileMyAnswer }) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/detail/${item.id}`);
  };

  return (
    <S.MyAnswerItem onClick={onClick}>
      <S.QuestionCover>
        <ProfileCategory content={item.category} />
        <S.QuestionTitle>
          <Caption size="lg" weight="medium">
            {item.title}
          </Caption>
        </S.QuestionTitle>
      </S.QuestionCover>

      <Body size="md" weight="semibold">
        <S.PreviewIcon aria-hidden="true">💬</S.PreviewIcon>
        {item.preview}
      </Body>
    </S.MyAnswerItem>
  );
}

export default MyAnswerItem;
