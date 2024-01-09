import { ProfileWrap } from "../../styled";
import { Sidebar } from "./components/Sidebar";
import { AsideWrap, Flex, InnerBlock } from "./styled";

export const Profile = () => {
  return (
    <ProfileWrap>
      <InnerBlock>
        <Flex>
          <AsideWrap>
            <Sidebar />
          </AsideWrap>
          <div className="flex-1 lg:max-w-2xl">Profile Settings</div>
        </Flex>
      </InnerBlock>
    </ProfileWrap>
  );
};
