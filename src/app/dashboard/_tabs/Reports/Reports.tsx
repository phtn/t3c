"use client";

import { ReportsWrap } from "../../styled";
import { Container } from "./styled";
import { ContentTitle, ReportsIcon } from "../common";

export const Reports = () => {
  return (
    <ReportsWrap>
      <Container>
        <ContentTitle title="Reports" icon={<ReportsIcon />} />
      </Container>
    </ReportsWrap>
  );
};
