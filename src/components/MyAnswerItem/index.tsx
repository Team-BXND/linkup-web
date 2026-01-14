import * as S from './style';
import type { ProfileMyAnswer } from '@/types/profile';
import Category from '../Category';
import { Body} from '../Text';

function MyAnswerItem({item}: {item: ProfileMyAnswer}) {
    return (
        <S.MyAnswerItem>
            <S.QuestionCover>
                <Category content={item.category}>
                </Category>
                <Body size="sm" weight="medium">{item.title}</Body>
            </S.QuestionCover>
            <Body size="md" weight="semibold">{item.preview}</Body>
        </S.MyAnswerItem>
    );
}

export default MyAnswerItem;