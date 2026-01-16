import * as S from "./style";
import type { ProfileMyAnswer } from "@/types/profile";
import MyAnswerItem from "../MyAnswerItem";
import ProfileContainer from "../ProfileContainer";

function MyAnswer({ items }: { items: ProfileMyAnswer[] }) {
  return (
    <ProfileContainer title="답변" height="355px">
      <S.ScrollArea>
        <S.DetailCover>
          {items.map((item) => (
            <MyAnswerItem key={item.id} item={item} />
          ))}
        </S.DetailCover>
      </S.ScrollArea>
    </ProfileContainer>
  );
}

export default MyAnswer;
