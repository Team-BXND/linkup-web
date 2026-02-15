import * as S from "./style";
import { Title } from "../common/Text";
import { Button } from "../common/Button";
import ProfileItem from "../MyProfileItem";
import type { ProfileMyInfo } from "@/types/profile";
import { linkupAxios } from "@/libs/customAxios";
import { useEffect, useState } from "react";
import { useLogout } from "@/hooks/Auth/useLogout";

interface ProfileResponse {
  status: number;
  data: ProfileMyInfo;
}

function MyProfile() {
  const [profileData, setProfileData] = useState<ProfileMyInfo>();
  const { logout } = useLogout();

  useEffect(() => {
    linkupAxios
      .get<ProfileResponse>(`/profile`)
      .then((response) => {
        setProfileData(response.data.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <S.Container>
      <Title size="md" weight="bold">
        프로필
      </Title>

      <S.DetailCover>
        {profileData && (
          <ProfileItem subtitle="닉네임" content={profileData.username} />
        )}
        {profileData && (
          <ProfileItem subtitle="이메일" content={profileData.email} />
        )}
        {profileData && (
          <ProfileItem
            subtitle="답변자 순위"
            content={profileData.ranking + "위"}
          />
        )}
        {profileData && (
          <ProfileItem subtitle="포인트" content={profileData.point + "P"} />
        )}

        <S.ButtonCover>
          <Button size="md" color="default" onClick={logout}>
            로그아웃
          </Button>
        </S.ButtonCover>
      </S.DetailCover>
    </S.Container>
  );
}

export default MyProfile;
