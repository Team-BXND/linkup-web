import * as S from './style';
import { Title } from '../Text';
import { Button } from '../Button';
import ProfileItem from '../ProfileItem';
import type { ProfileMyinfo } from '@/types/profile';

function Profile(item:ProfileMyinfo) {
    return(
        <S.ProfileContainer>
            <Title size="md" weight="bold">Profile</Title>

            <S.DetailCover>
            <ProfileItem subtitle="닉네임" content={item.username}/>
            <ProfileItem subtitle="이메일" content={item.email}/>
            <ProfileItem subtitle="답변자 순위" content={item.rank}/>
            <ProfileItem subtitle="포인트" content={item.point}/>

            <S.ButtonCover>
            <Button size="lg" color="default">로그아웃</Button>
            </S.ButtonCover>


            </S.DetailCover>

        </S.ProfileContainer>
    )
}

export default Profile;