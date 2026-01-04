import styled from "styled-components";
import Logo_Row from "@/assets/Logo/Logo_Row.svg?react"
import { Link } from "react-router-dom";

interface INavTab {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 36px 40px;
`

export const Logo = styled(Logo_Row)`
  width: auto;
  height: 40px;
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
`