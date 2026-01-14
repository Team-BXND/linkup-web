import * as S from './style';
import { Title,Caption } from '../Text';

function ProfileContainer({height}: {height: number}) {
  return (
    <S.ProfileContainer height={height}>
        <S.TitleCover>
                    <Title size="md" weight="bold">내 답변</Title>
                    <S.More>
                    <Caption size="sm" weight='medium'>더보기</Caption>
                    </S.More>
        </S.TitleCover>
    </S.ProfileContainer>
  )
}

export default ProfileContainer;