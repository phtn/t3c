import { LinkPressable, Preview } from "./Pressable";
import { MidItemGrid } from "./styled";

type MidItemProps = {
  copyInvUrl: () => void;
  invoice_url: string;
};

export const MidItem = ({ invoice_url, copyInvUrl }: MidItemProps) => (
  <MidItemGrid>
    <LinkPressable
      label="Payment Link"
      content={invoice_url}
      onClick={copyInvUrl}
    />
    <Preview
      label="Preview Link"
      content={"Opens a new tab"}
      onClick={copyInvUrl}
    />
  </MidItemGrid>
);
