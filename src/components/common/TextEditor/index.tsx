import ReactQuill, { Quill } from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { renderToStaticMarkup } from "react-dom/server";
import * as S from "./style";
import type { RuleSet } from "styled-components";

import BoldIcon from "@/assets/Editor/Bold.svg?react";
import ItalicIcon from "@/assets/Editor/Italic.svg?react";
import StrikeIcon from "@/assets/Editor/Strike.svg?react";
import LinkIcon from "@/assets/Editor/Link.svg?react";
import ImageIcon from "@/assets/Editor/Image.svg?react";
import Toolbar from "./Toolbar";
import { useId, useMemo, useRef, type ChangeEvent, type Dispatch } from "react";
import { Button } from "../Button";
import TurndownService from "turndown";
import { linkupAxios } from "@/libs/customAxios";
import { AxiosError } from "axios";

interface ReactQuillEditorProps {
  value?: string;
  onChange: Dispatch<React.SetStateAction<string>>;
  style?: RuleSet;
  placeholder?: string;
  buttonText: string;
  onSubmit: (markdown: string) => void;
}

interface ImageEmbedValue {
  url: string;
  s3Key?: string;
}

/** 툴바의 아이콘 설정 */
const icons = Quill.import("ui/icons") as Record<string, string>;
const BaseImage = Quill.import("formats/image");

class S3ImageBlot extends BaseImage {
  static create(value: string | ImageEmbedValue) {
    const imageValue = typeof value === "string" ? { url: value } : value;
    const node = super.create(imageValue.url) as HTMLImageElement;

    if (imageValue.s3Key) {
      node.setAttribute("data-s3-key", imageValue.s3Key);
    }

    return node;
  }

  static value(node: HTMLImageElement): ImageEmbedValue {
    return {
      url: node.getAttribute("src") ?? "",
      s3Key: node.getAttribute("data-s3-key") ?? "",
    };
  }
}

S3ImageBlot.blotName = "image";
S3ImageBlot.tagName = "IMG";
Quill.register(S3ImageBlot, true);

icons["bold"] = renderToStaticMarkup(<BoldIcon />);
icons["italic"] = renderToStaticMarkup(<ItalicIcon />);
icons["strike"] = renderToStaticMarkup(<StrikeIcon />);
icons["link"] = renderToStaticMarkup(<LinkIcon />);
icons["image"] = renderToStaticMarkup(<ImageIcon />);

function TextEditor({
  value,
  onChange,
  style,
  placeholder,
  buttonText,
  onSubmit,
}: ReactQuillEditorProps) {
  const contentRef = useRef<InstanceType<typeof ReactQuill>>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isPickingImageRef = useRef(false);
  const imageInsertRangeRef = useRef<{ index: number; length: number } | null>(
    null,
  );
  const turndownService = useMemo(() => {
    const service = new TurndownService();
    service.addRule("image-with-s3-key", {
      filter: "img",
      replacement: (_, node) => {
        const img = node as HTMLImageElement;
        const alt = img.getAttribute("alt") ?? "";
        const s3Key = img.getAttribute("data-s3-key");
        const src = img.getAttribute("src") ?? "";
        const markdownSrc = s3Key?.trim() ? s3Key : src;
        return markdownSrc ? `![${alt}](${markdownSrc})` : "";
      },
    });
    return service;
  }, []);
  const toolbarId = useId().replace(/:/g, "");

  const convertToMarkdown = () => {
    return turndownService.turndown(value ?? "");
  };

  const handleSubmit = () => {
    const markdown = convertToMarkdown();
    onSubmit(markdown);
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const quill = contentRef.current?.getEditor();

    if (!file || !quill) {
      isPickingImageRef.current = false;
      imageInsertRangeRef.current = null;
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    const range = imageInsertRangeRef.current ??
      quill.getSelection(true) ?? {
        index: quill.getLength(),
        length: 0,
      };

    const formData = new FormData();
    formData.append("file", file);

    linkupAxios
      .post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        const data = response.data;
        const s3key = data.data ?? "";

        if (!s3key) {
          throw new Error("Image upload failed");
        }

        return linkupAxios
          .get("/upload", {
            params: { s3Key: s3key },
          })
          .then((response) => {
            const previewUrl = response.data.data ?? "";

            if (!previewUrl) {
              throw new Error("Image get failed");
            }

            quill.insertEmbed(
              range.index,
              "image",
              { url: previewUrl, s3Key: s3key },
              "user",
            );
            quill.setSelection(range.index + 1);
          });
      })
      .catch((error: unknown) => {
        if (error instanceof AxiosError && error.response?.status === 413) {
          alert("10M 이하의 파일만 업로드 가능합니다.");
        } else {
          alert("이미지 업로드 실패. 잠시 후 다시 시도해 주세요.");
        }
      })
      .finally(() => {
        isPickingImageRef.current = false;
        imageInsertRangeRef.current = null;
        if (fileInputRef.current) fileInputRef.current.value = "";
      });
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: `#${toolbarId}`,
        handlers: {
          bold: function (this: { quill: Quill }) {
            this.quill.format("bold", !this.quill.getFormat().bold);
          },
          italic: function (this: { quill: Quill }) {
            this.quill.format("italic", !this.quill.getFormat().italic);
          },
          underline: function (this: { quill: Quill }) {
            this.quill.format("underline", !this.quill.getFormat().underline);
          },
          strike: function (this: { quill: Quill }) {
            this.quill.format("strike", !this.quill.getFormat().strike);
          },
          image: () => {
            if (isPickingImageRef.current) return;
            isPickingImageRef.current = true;
            const quill = contentRef.current?.getEditor();
            if (quill) {
              imageInsertRangeRef.current = quill.getSelection(true) ?? {
                index: quill.getLength(),
                length: 0,
              };
            }
            fileInputRef.current?.click();
          },
        },
      },
    }),
    [toolbarId],
  );

  const formats = ["bold", "italic", "underline", "strike", "link", "image"];

  return (
    <S.QuillWrapper>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
      <S.QuillStyle style={style} />
      <ReactQuill
        ref={contentRef}
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <S.ToolbarContainer>
        <Toolbar id={toolbarId} />
        <Button type="button" size="md" color="default" onClick={handleSubmit}>
          {buttonText}
        </Button>
      </S.ToolbarContainer>
    </S.QuillWrapper>
  );
}

export default TextEditor;
