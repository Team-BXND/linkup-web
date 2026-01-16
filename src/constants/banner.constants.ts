import School from "@/assets/Banner/School.png";
import Laptop from "@/assets/Banner/Laptop.png";
import Face from "@/assets/Banner/Face.png";

export interface IBanner {
  text: string;
  redirectText: string;
  refirectPath: string;
  background: string;
  image: string;
}

const BannerList: IBanner[] = [
  {
    text: "대소고에서\n살아남는 방법?",
    redirectText: "학교생활 게시판 →",
    refirectPath: "/qna",
    background: "linear-gradient(35deg, #019543 0%, #4E44DF 100%)",
    image: School,
  },
  {
    text: "웹은 뭐부터\n공부해야하지?",
    redirectText: "코드 게시판 →",
    refirectPath: "/qna",
    background: "linear-gradient(35deg, #4A6EFF 0%, #FF816B 100%)",
    image: Laptop,
  },
  {
    text: "나도 프로젝트가\n처음이라..",
    redirectText: "프로젝트가 어렵다면? →",
    refirectPath: "/qna",
    background: "linear-gradient(35deg, #E05D3C 0%, #FFCF66 100%)",
    image: Face,
  },
];

export default BannerList;
