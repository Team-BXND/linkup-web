import * as S from "./style";
import MyProfile from "@/components/MyProfile";
import MyAnswer from "@/components/MyAnswer";
import MyQuestion from "@/components/MyQuestion";

function Profile() {
  return (
    <S.Container>
      <S.LeftColumn>
        <MyProfile/>
        <MyAnswer/>
      </S.LeftColumn>

      <S.RightColumn>
        <MyQuestion/>
      </S.RightColumn>
    </S.Container>
  );
}

export default Profile;
