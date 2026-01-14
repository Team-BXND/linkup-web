import * as S from './style';
import type { ProfileMyAnswer } from '@/types/profile';
import { Body,Caption } from '../Text';

function MyAnswerItem({item}: {item: ProfileMyAnswer}) {
    return (
        <S.MyAnswerItem>
            <S.QuestionCover>
                <S.Category>
                    <Caption size="md" weight="medium">{item.category}</Caption>
                </S.Category>
                <Body size="sm" weight="medium">{item.title}</Body>
            </S.QuestionCover>
            <Body size="md" weight="semibold">{item.preview}</Body>
        </S.MyAnswerItem>
    );
}

export default MyAnswerItem;