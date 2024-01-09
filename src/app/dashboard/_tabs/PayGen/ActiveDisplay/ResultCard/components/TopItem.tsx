import { Pressable } from "./Pressable";
import { decimal, transformDate } from "@utils/helpers";
import { TopItemGrid } from "./styled";

type TopProps = {
  amount: number;
  expiry_date: string;
  external_id: string;
  copyAmount: () => void;
  copyExpiry: () => void;
  copyInvNum: () => void;
};

export const TopItem = ({
  amount,
  expiry_date,
  external_id,
  copyAmount,
  copyExpiry,
  copyInvNum,
}: TopProps) => (
  <TopItemGrid>
    <Pressable
      label="Invoice Number"
      content={external_id}
      onClick={copyInvNum}
    />
    <Pressable
      label="Total Amount"
      content={decimal(amount, 2)}
      onClick={copyAmount}
    />
    <Pressable
      label="Expiry Date"
      content={transformDate(expiry_date)}
      onClick={copyExpiry}
    />
  </TopItemGrid>
);
