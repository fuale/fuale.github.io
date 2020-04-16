import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const Link = styled(NavLink)`
  padding: 12px 18px;
  margin-bottom: 10px;
  font-size: 120%;
  text-decoration: none;
  color: inherit;
  border-radius: 6px;

  &.active {
    background: #7771;
  }

  &:hover,
  &:focus {
    text-decoration: none;
  }
`
