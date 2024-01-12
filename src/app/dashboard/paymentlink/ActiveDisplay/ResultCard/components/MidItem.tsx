import { onSuccess } from "@utils/toast";
import { LinkPressable, Preview } from "./Pressable";
import { MidItemGrid } from "./styled";

type MidItemProps = {
  copyInvUrl: () => void;
  invoice_url: string;
};

const handleOpenPreview = () => {
  onSuccess("New tab opened.");
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
      link={invoice_url}
      onClick={handleOpenPreview}
    />
  </MidItemGrid>
);
