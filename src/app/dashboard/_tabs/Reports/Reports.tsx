import { TableIcon } from "@radix-ui/react-icons";
import { ReportsWrap } from "../../styled";
import { Container, Title, TitleWrap } from "./styled";

export const Reports = () => {
  return (
    <ReportsWrap>
      <Container>
        <TitleWrap>
          <Title>
            <TableIcon className="mr-2" />
            <span>Reports</span>
          </Title>
        </TitleWrap>
      </Container>
    </ReportsWrap>
  );
};
