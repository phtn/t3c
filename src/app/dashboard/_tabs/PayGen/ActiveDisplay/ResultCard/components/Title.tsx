import { type TitleItem } from "../hooks";
import { ColWrap, TitleFlex, TitleLabel, TitleValue } from "./styled";

type TitleProps = {
  titleProps: TitleItem[] | null | undefined;
};

const Column = ({ item }: { item: TitleItem }) => (
  <ColWrap>
    <TitleValue>{item.value}</TitleValue>
    <TitleLabel>{item.label}</TitleLabel>
  </ColWrap>
);
export const Title = ({ titleProps }: TitleProps) => {
  return (
    <TitleFlex>
      {titleProps?.map((item) => <Column key={item.value} item={item} />)}
    </TitleFlex>
  );
};
