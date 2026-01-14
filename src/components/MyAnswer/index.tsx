import * as S from './style';
import type { ProfileMyAnswer } from '@/types/profile';
import MyAnswerItem from '../MyAnswerItem';
import { Title, Caption } from '../Text';

function MyAnswer({items}: {items: ProfileMyAnswer[]}){
    return(
        <S.MyAnswer>

            <S.TitleCover>
                <Title size="md" weight="bold">내 답변</Title>
                <S.More>
                    <Caption size="lg" weight='medium'>더보기 &rarr;</Caption>
                </S.More>
            </S.TitleCover>
            
            <S.ScrollArea>
                <S.DetailCover>
                {items.map((item)=>(
                    <MyAnswerItem key={item.id} item={item}/>
                ))}
                </S.DetailCover>
            </S.ScrollArea>
        </S.MyAnswer>

    )
}

export default MyAnswer;