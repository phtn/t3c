import { opts } from "@utils/helpers";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import { Loading } from "./loading";
import { Variant } from "./variant";

const SubmitButton = tw(Variant)`
  w-full mt-[24px]
`;

const Submit = styled(SubmitButton).attrs<{ width?: number }>({
  type: "submit",
  variant: "outline",
  size: "lg",
})`
  width: ${({ width }) => width}px;
`;

const InactiveLabel = tw.span`
  text-indigo-600 dark:text-slate-400 font-bold mr-3
`;
type SubmitProps = {
  label: string;
};

const ActiveSubmit = ({ label }: SubmitProps) => <span>{label}</span>;

const InactiveSubmit = ({ label }: SubmitProps) => (
  <>
    <InactiveLabel>{label}</InactiveLabel>
    <Loading />
  </>
);

type SubmitActionProps = {
  activeLabel: string;
  inactiveLabel: string;
  isValid?: boolean;
  loading: boolean;
  width?: number;
};

export const SubmitAction = ({
  activeLabel,
  inactiveLabel,
  isValid,
  loading,
  width,
}: SubmitActionProps) => {
  const options = opts(
    <InactiveSubmit label={inactiveLabel} />,
    <ActiveSubmit label={activeLabel} />,
  );
  return (
    <Submit width={width} disabled={loading || isValid === false}>
      {options.get(loading)}
    </Submit>
  );
};

type ClickActionProps = {
  activeLabel: string;
  inactiveLabel: string;
  isValid?: boolean;
  loading: boolean;
  onClick: <T>(value: T) => void;
  width?: number;
};

export const ClickAction = ({
  activeLabel,
  inactiveLabel,
  isValid,
  loading,
  onClick,
}: ClickActionProps) => {
  const options = opts(
    <InactiveSubmit label={inactiveLabel} />,
    <ActiveSubmit label={activeLabel} />,
  );
  return (
    <Variant
      className="w-full md:w-fit"
      variant="default"
      onClick={onClick}
      disabled={loading || isValid === false}
    >
      {options.get(loading)}
    </Variant>
  );
};
