import Banner from "@/components/common/Banner";
import Popular from "@/components/Popular";
import { useEffect, useState } from "react";
import { linkupAxios } from "@/libs/customAxios";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import {
  type PostMeta,
  type PostData,
  type PostResponse,
} from "@/types/postResponse";
import Questions from "@/components/Questions";
import * as S from "./style";
import AddIcon from "@/assets/QnA/AddIcon.svg?react";

function QnA() {
  const [data, setData] = useState<PostData[]>();
  const [meta, setMeta] = useState<PostMeta>();
  const { category } = useParams<{ category: string }>();
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    linkupAxios
      .get<PostResponse>("/posts", {
        params: {
          category: category,
          page: page,
        },
      })
      .then((response) => {
        setData(response.data.data);
        setMeta(response.data.meta);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [category, page]);

  return (
    <>
      <S.AddButton
        size="lg"
        color="default"
        onClick={() => navigate("/editor")}
      >
        <AddIcon />
      </S.AddButton>
      <Banner />
      <Popular />
      <Questions data={data} meta={meta} page={page} setPage={setPage} />
      <Outlet />
    </>
  );
}

export default QnA;
