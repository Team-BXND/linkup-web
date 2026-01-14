import * as S from './style';
import { Title } from '../Text';
import { Button } from '../Button';
import ProfileItem from '../MyProfileItem';
import type { ProfileMyInfo } from '@/types/profile';

function MyProfile({item}:{item:ProfileMyInfo}) {
    return(
        <S.ProfileContainer>
            <Title size="md" weight="bold">프로필</Title>

            <S.DetailCover>
            <ProfileItem subtitle="닉네임" content={item.username}/>
            <ProfileItem subtitle="이메일" content={item.email}/>
            <ProfileItem subtitle="답변자 순위" content={item.rank}/>
            <ProfileItem subtitle="포인트" content={item.point}/>

            <S.ButtonCover>
            <Button size="md" color="default">로그아웃</Button>
            </S.ButtonCover>


            </S.DetailCover>

        </S.ProfileContainer>
    )
}

export default MyProfile;