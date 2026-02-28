import * as S from "./style";
import { Input } from "@/components/common/Input";
import { QnaCategory } from "@/constants/qnaCategory.constants";
import TextEditor from "@/components/common/TextEditor";
import { useForm, Controller } from "react-hook-form";
import Showdown from "showdown";
import DOMPurify from "dompurify";
import { linkupAxios } from "@/libs/customAxios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

interface EditFormValues {
  title: string;
  author: string;
  category: "code" | "school" | "project";
  content: string;
}

interface EditPostResponse {
  status: number;
  data: {
    title: string;
    author: string;
    category: "code" | "school" | "project";
    content: string;
  };
}

const converter = new Showdown.Converter();
const IMAGE_MARKDOWN_REGEX = /!\[([^\]]*)\]\(([^)]+)\)/g;

interface PreviewUrlResponse {
  data?: string;
}

const resolvePreviewUrl = (s3Key: string) => {
  if (!s3Key || s3Key.startsWith("http")) {
    return Promise.resolve(s3Key);
  }

  return linkupAxios
    .get<PreviewUrlResponse>("/upload", {
      params: { s3Key, s3key: s3Key },
    })
    .then((response) => response.data.data ?? s3Key)
    .catch(() => s3Key);
};

const renderMarkdownToHtml = (value: unknown) => {
  const markdown = typeof value === "string" ? value : "";
  const imageSources = Array.from(
    new Set(
      Array.from(markdown.matchAll(IMAGE_MARKDOWN_REGEX))
        .map((match) => match[2]?.trim() ?? "")
        .filter(Boolean),
    ),
  );

  if (imageSources.length === 0) {
    return Promise.resolve(DOMPurify.sanitize(converter.makeHtml(markdown)));
  }

  return Promise.all(
    imageSources.map((source) =>
      resolvePreviewUrl(source).then((url) => [source, url] as const),
    ),
  ).then((pairs) => {
    const sourceToUrl = new Map<string, string>(pairs);
    const resolvedMarkdown = markdown.replace(
      IMAGE_MARKDOWN_REGEX,
      (full, alt, src) => {
        const resolvedUrl = sourceToUrl.get((src as string).trim());
        if (!resolvedUrl) return full;
        return `![${alt}](${resolvedUrl})`;
      },
    );

    return DOMPurify.sanitize(converter.makeHtml(resolvedMarkdown));
  });
};

function Editor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, control, setValue } = useForm<EditFormValues>(
    {
      defaultValues: {
        title: "",
        author: "",
        category: "code",
        content: "",
      },
    },
  );

  useEffect(() => {
    if (id) {
      linkupAxios
        .get<EditPostResponse>(`/posts/${id}`)
        .then((res) => {
          const payload = res.data.data;
          return renderMarkdownToHtml(payload.content).then((htmlContent) => {
            setValue("title", payload.title);
            setValue("author", payload.author);
            setValue("category", payload.category);
            setValue("content", htmlContent);
          });
        })
        .catch((err) => {
          console.error("데이터를 불러오는데 실패했습니다.", err);
        });
    }
  }, [id, setValue]);

  const onSubmit = (data: EditFormValues, markdownContent: string) => {
    const payload = {
      category: data.category,
      title: data.title,
      content: markdownContent,
      author: data.author,
    };

    if (id) {
      linkupAxios
        .patch(`/posts/${id}`, payload)
        .then(() => {
          alert("게시글을 수정하였습니다.");
          navigate("/qna");
        })
        .catch(() => {
          alert("게시글을 수정하지 못하였습니다..");
          navigate("/qna");
        });
    } else {
      linkupAxios
        .post("/posts", payload)
        .then(() => {
          alert("게시글을 등록하였습니다.");
          navigate("/qna");
        })
        .catch(() => {
          alert("게시글을 등록하지 못하였습니다.");
          navigate("/qna");
        });
    }
  };

  const handleEditorSubmit = (markdownContent: string) => {
    handleSubmit((data) => onSubmit(data, markdownContent))();
  };

  return (
    <S.Container>
      <S.Form onSubmit={(e) => e.preventDefault()}>
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
            {QnaCategory.map((elem) => {
              if (elem.path !== "all") {
                return (
                  <option key={elem.path} value={elem.path}>
                    {elem.text}
                  </option>
                );
              }
            })}
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
              onSubmit={handleEditorSubmit}
              style={S.EditorStyle}
            />
          )}
        />
      </S.Form>
    </S.Container>
  );
}

export default Editor;
