import * as S from "./style";
import MyProfile from "@/components/MyProfile";
import MyAnswer from "@/components/MyAnswer";
import MyQuestion from "@/components/MyQuestion";

import { myProfile } from "@/constants/profile.constants.ts";
import { myAnswer } from "@/constants/profile.constants.ts";
import { myQuestion } from "@/constants/profile.constants.ts";

function Profile() {
  return (
    <S.Container>
      <S.LeftColumn>
        <MyProfile item={myProfile} />
        <MyAnswer items={myAnswer.data} />
      </S.LeftColumn>

      <S.RightColumn>
        <MyQuestion items={myQuestion.data} />
      </S.RightColumn>
    </S.Container>
  );
}

export default Profile;
