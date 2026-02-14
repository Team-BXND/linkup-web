import * as S from "./style";
import { Title } from "../common/Text";
import { Button } from "../common/Button";
import ProfileItem from "../MyProfileItem";
import type { ProfileMyInfo } from "@/types/profile";
import { linkupAxios } from "@/libs/customAxios";
import { useEffect, useState } from "react";
import { extractData } from "@/utils/apiNormalizer";

function MyProfile() {
  const [profileData, setProfileData] = useState<ProfileMyInfo>();
  useEffect(() => {
    linkupAxios
      .get(`/profile`)
      .then((response) => {
        const rawData = extractData<Record<string, unknown>>(response.data);
        console.log(rawData);
        if (!rawData) return;

        setProfileData({
          username: String(rawData.username ?? rawData.userName ?? ""),
          email: String(rawData.email ?? ""),
          point: Number(rawData.point ?? rawData.points ?? 0),
          rank: Number(rawData.rank ?? 0),
        });
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
            content={profileData.rank + "위"}
          />
        )}
        {profileData && (
          <ProfileItem subtitle="포인트" content={profileData.point + "P"} />
        )}

        <S.ButtonCover>
          <Button size="md" color="default">
            로그아웃
          </Button>
        </S.ButtonCover>
      </S.DetailCover>
    </S.Container>
  );
}

export default MyProfile;
