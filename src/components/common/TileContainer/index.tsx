import * as S from "./style";
import { Title } from "@/components/common/Text";
import type { ReactNode } from "react";

function TileContainer({
  title,
  children,
}: {
  title?: string;
  children?: ReactNode;
}) {
  return (
    <S.TileContainer>
      {title ? (
        <S.TitleContainer>
          <Title size="md" weight="bold">
            {title}
          </Title>
        </S.TitleContainer>
      ) : null}
      {children}
    </S.TileContainer>
  );
}

export default TileContainer;
