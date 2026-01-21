import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";
import { QnaCategory } from "@/constants/qnaCategory.constants";

function Category() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <S.Container>
      {QnaCategory.map((elem) => {
        const isActived = location.pathname.includes(elem.path);
        return (
          <S.Element
            active={isActived}
            key={elem.path}
            onClick={() => (!isActived ? navigate(`/qna/${elem.path}`) : null)}
          >
            {elem.text}
          </S.Element>
        );
      })}
    </S.Container>
  );
}

export default Category;
