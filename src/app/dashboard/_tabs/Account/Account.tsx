import { AvatarIcon } from "@radix-ui/react-icons";
import { ProfileWrap } from "../../styled";
import { Sidebar } from "./components/Sidebar";
import {
  AsideWrap,
  Container,
  Flex,
  InnerBlock,
  Title,
  TitleWrap,
} from "./styled";

export const Profile = () => {
  return (
    <ProfileWrap>
      <Container>
        <TitleWrap>
          <Title>
            <AvatarIcon className="mr-2" />
            <span>Account</span>
          </Title>
        </TitleWrap>
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
