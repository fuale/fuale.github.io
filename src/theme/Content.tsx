import styled from "styled-components"

export const Content = styled.div`
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
  }

  padding: 24px 32px;
  max-height: 100vh;
  overflow: auto;
`
