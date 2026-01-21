import Banner from "@/components/common/Banner";
import Popular from "@/components/Popular";
import { useState } from "react";
import { linkupAxios } from "@/libs/customAxios";
import { Outlet, useParams } from "react-router-dom";
import {
  type PostMeta,
  type PostData,
  type PostResponse,
} from "@/types/postResponse";
import Questions from "@/components/Questions";

function QnA() {
  const [data, setData] = useState<PostData[]>();
  const [meta, setMeta] = useState<PostMeta>();
  const { category } = useParams<{ category: string }>();
  const [page, setPage] = useState(1);

  linkupAxios
    .get<PostResponse>("/posts", {
      params: {
        category: category,
      },
    })
    .then((response) => {
      setData(response.data.data);
      setMeta(response.data.meta);
    });

  return (
    <>
      <Banner />
      <Popular />
      <Questions data={data} meta={meta} page={page} setPage={setPage} />
      <Outlet />
    </>
  );
}

export default QnA;
