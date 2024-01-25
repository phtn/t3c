import { SettingsWrap } from "../../styled";
import { Container } from "./styled";
import { ContentTitle, SettingsIcon } from "../common";

export const Settings = () => {
  return (
    <SettingsWrap>
      <Container>
        <ContentTitle title="Settings" icon={<SettingsIcon />} />
      </Container>
    </SettingsWrap>
  );
};
