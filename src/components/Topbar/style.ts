import styled from "styled-components";
import Logo_Row from "@/assets/Logo/Logo_Row.svg?react"
import { Link } from "react-router-dom";

interface INavTab {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 36px 40px;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px
  }
`

export const Logo = styled(Logo_Row)`
  width: auto;
  height: 40px;
  cursor: pointer;
`

export const NavContainer = styled.div`
  display: flex;
  gap: -10px;
  padding: 4px;
  border-radius: 1000px;
  background-color: rgba(2, 81, 255, 0.3);
`

export const NavTab = styled(Link)<INavTab>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.active ? `rgba(60, 121, 255, 0.4)` : `rgba(0, 0, 0, 0)`};
  padding: 8px 30px;
  border-radius: 1000px;
  color: #fff;

  @media (max-width: 768px) {
    width: 100%;
    padding: 4px 0px;
  }
`