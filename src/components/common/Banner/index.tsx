import TileContainer from "@/components/common/TileContainer";
import * as S from "./style";
import BannerList from "@/constants/banner.constants";

function Banner() {
  return (
    <TileContainer title="💬 대소고에서 궁금한 점이 있다면?">
      <S.BannerContainer>
        {BannerList.map((elem) => {
          return (
            <S.Banner background={elem.background} to={elem.refirectPath}>
              <S.BannerTitle size="md" weight="semibold">
                {elem.text}
              </S.BannerTitle>
              <S.BannerRedirect size="sm" weight="semibold">
                {elem.redirectText}
              </S.BannerRedirect>
              <S.Imoji src={elem.image} />
            </S.Banner>
          );
        })}
      </S.BannerContainer>
    </TileContainer>
  );
}

export default Banner;
