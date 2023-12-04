import * as React from "react";
import { FC } from "react";
import Header from "./HeaderContent";

type Props = {
  variant?: "simple" | "general";
};

const GeneralHeader: FC<Props> = ({ variant }: Props) => {
  return <Header variant={variant} />;
};

GeneralHeader.defaultProps = {
  variant: "general",
};

export default GeneralHeader;
