import * as S from "./style";
import { Input } from "@/components/common/Input";
import { QnaCategory } from "@/constants/qnaCategory.constants";
import TextEditor from "@/components/common/TextEditor";
import { useForm, Controller } from "react-hook-form";
import TurndownService from "turndown";
import Showdown from "showdown";
import DOMPurify from "dompurify";
import { linkupAxios } from "@/libs/customAxios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

interface EditFormValues {
  title: string;
  author: string;
  category: "all" | "code" | "school" | "project";
  content: string;
}

function Editor() {
  const { id } = useParams();
  const turndownService = new TurndownService();
  const converter = new Showdown.Converter();
  const { register, handleSubmit, control, setValue } = useForm<EditFormValues>(
    {
      defaultValues: {
        title: "",
        author: "",
        category: "all",
        content: "",
      },
    },
  );

  useEffect(() => {
    if (id) {
      linkupAxios
        .get(`/posts/${id}`)
        .then((res) => {
          const { title, author, category, content } = res.data;
          const htmlContent = DOMPurify.sanitize(converter.makeHtml(content));
          setValue("title", title);
          setValue("author", author);
          setValue("category", category);
          setValue("content", htmlContent);
        })
        .catch((err) => {
          console.error("데이터를 불러오는데 실패했습니다.", err);
        });
    }
  }, [id, setValue]);

  const onSubmit = (data: EditFormValues) => {
    const markdownContent = turndownService.turndown(data.content);
    const payload = {
      category: data.category,
      title: data.title,
      content: markdownContent,
      author: data.author,
    };

    if (id) {
      linkupAxios
        .put(`/posts/${id}`, payload)
        .then((res) => {
          console.log("수정 성공:", res.data);
        })
        .catch((err) => {
          console.error("수정 실패:", err);
        });
    } else {
      linkupAxios
        .post("/post", payload)
        .then((res) => {
          console.log("등록 성공:", res.data);
        })
        .catch((err) => {
          console.error("등록 실패:", err);
        });
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Row>
          <S.QuestionIcon size="lg" weight="bold">
            Q
          </S.QuestionIcon>
          <Input
            $size="lg"
            status="default"
            placeholder="제목을 입력하세요."
            {...register("title", { required: true })}
          />
        </S.Row>
        <S.Row>
          <Input
            $size="md"
            status="default"
            placeholder="닉네임을 입력하세요."
            {...register("author", { required: true })}
          />
          <Input
            $size="md"
            status="default"
            placeholder="카테고리를 선택하세요."
            as="select"
            {...register("category", { required: true })}
          >
            {QnaCategory.map((elem) => (
              <option key={elem.path} value={elem.path}>
                {elem.text}
              </option>
            ))}
          </Input>
        </S.Row>
        <Controller
          name="content"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextEditor
              value={field.value}
              onChange={field.onChange}
              placeholder="질문글을 입력하세요."
              buttonText={id ? "수정하기" : "질문하기"}
              style={S.EditorStyle}
            />
          )}
        />
      </S.Form>
    </S.Container>
  );
}

export default Editor;
