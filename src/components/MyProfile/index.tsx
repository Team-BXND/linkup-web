import * as S from "./style";
import { Title } from "../common/Text";
import { Button } from "../common/Button";
import ProfileItem from "../MyProfileItem";
import type { ProfileMyInfo } from "@/types/profile";
import type { RankingResponse } from "@/types/ranking";
import { linkupAxios } from "@/libs/customAxios";
import { useEffect, useState } from "react";
import { useLogout } from "@/hooks/Auth/useLogout";
import useRankingViewModel from "@/hooks/Ranking/useRankingViewModel";

interface ProfileResponse {
  status: number;
  data: ProfileMyInfo;
}

function MyProfile() {
  const [profileData, setProfileData] = useState<ProfileMyInfo>();
  const [rankingData, setRankingData] = useState<RankingResponse["data"]>();
  const { logout } = useLogout();

  useEffect(() => {
    Promise.all([
      linkupAxios.get<ProfileResponse>(`/profile`),
      linkupAxios.get<RankingResponse>(`/ranking`),
    ])
      .then((response) => {
        setProfileData(response[0].data.data);
        setRankingData(response[1].data.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const { myRank } = useRankingViewModel(
    rankingData ?? [],
    profileData?.username
  );

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
            content={(myRank?.rank ?? "-") + "위"}
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
