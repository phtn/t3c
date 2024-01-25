import { ProfileWrap } from "../../styled";
import { Sidebar } from "./components/Sidebar";
import { AsideWrap, Container, Flex, InnerBlock } from "./styled";
import { AccountIcon, ContentTitle } from "../common";

export const Profile = () => {
  return (
    <ProfileWrap>
      <Container>
        <ContentTitle title="Account" icon={<AccountIcon />} />
      </Container>
      <InnerBlock>
        <Flex>
          <AsideWrap>
            <Sidebar />
          </AsideWrap>
          <div className="mt-3 flex-1 lg:max-w-2xl">Profile Settings</div>
        </Flex>
      </InnerBlock>
    </ProfileWrap>
  );
};
