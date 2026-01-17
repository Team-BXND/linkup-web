import * as S from "./style";
import { Caption } from "@/components/common/Text";
import type { ProfileCategory } from "@/types/profile";

function Category({ content }: { content: ProfileCategory }) {
  return (
    <S.Category>
      <Caption size="md" weight="medium">
        {content}
      </Caption>
    </S.Category>
  );
}

export default Category;
