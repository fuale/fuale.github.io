import SyntaxHighlighter, {
  SyntaxHighlighterProps
} from "react-syntax-highlighter"
import { cekta } from "./Highlight"
import * as React from "react"

export const Code: React.FC<SyntaxHighlighterProps> = ({
  children,
  language = "php",
  ...props
}) => {
  return (
    <SyntaxHighlighter language={language} {...props} style={cekta}>
      {children}
    </SyntaxHighlighter>
  )
}
