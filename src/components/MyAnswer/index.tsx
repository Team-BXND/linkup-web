import * as S from './style';
import type { ProfileMyAnswer } from '@/types/profile';
import MyAnswerItem from '../MyAnswerItem';
import { ProfileContainer } from '../Profile/style';
import { myAnswer } from '@/constants/profile.constants.ts';

function MyAnswer({item}: {item: ProfileMyAnswer}){
    return(
        <ProfileContainer>
            <S.DetailCover>
                {myAnswer.data.map((item)=>(
                    <MyAnswerItem key={item.id} item={item}/>
                ))}
            </S.DetailCover>


        </ProfileContainer>
    )
}

export default MyAnswer;