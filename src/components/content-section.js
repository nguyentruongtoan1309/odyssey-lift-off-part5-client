import React from "react";
import styled from "@emotion/styled";
import { widths, colors } from "../styles";

/**
 * Content Section component renders content (mainly text/mdown based)
 * for track and module details
 */
const ContentSection = ({ children }) => {
  return <ContentDiv>{children}</ContentDiv>;
};

export default ContentSection;

/** ContentSection styled component */
const ContentDiv = styled.div({
  marginTop: 10,
  display: "flex",
  flexDirection: "column",
  maxWidth: widths.textPageWidth,
  width: "100%",
  alignSelf: "center",
  backgroundColor: colors.background,
});
