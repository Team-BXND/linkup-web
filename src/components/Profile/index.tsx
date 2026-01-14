import * as S from './style';
import { Title } from '../Text';
import { Button } from '../Button';
import ProfileItem from '../ProfileItem';

function Profile() {
    return(
        <S.ProfileContainer>
            <Title size="md" weight="bold">Profile</Title>

            <S.DetailCover>
            <ProfileItem subtitle="닉네임" content="홍길동"/>
            <ProfileItem subtitle="이메일" content="홍길동"/>
            <ProfileItem subtitle="답변자 순위" content="홍길동"/>
            <ProfileItem subtitle="포인트" content="홍길동"/>

            <S.ButtonCover>
            <Button size="lg" color="default">로그아웃</Button>
            </S.ButtonCover>


            </S.DetailCover>

        </S.ProfileContainer>
    )
}

export default Profile;