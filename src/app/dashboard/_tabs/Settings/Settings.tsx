import { GearIcon, TableIcon } from "@radix-ui/react-icons";
import { ReportsWrap, SettingsWrap } from "../../styled";
import { Container, Title, TitleWrap } from "./styled";

export const Settings = () => {
  return (
    <SettingsWrap>
      <Container>
        <TitleWrap>
          <Title>
            <GearIcon className="mr-2" />
            <span>Settings</span>
          </Title>
        </TitleWrap>
      </Container>
    </SettingsWrap>
  );
};
