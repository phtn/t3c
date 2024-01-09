import tw from "tailwind-styled-components";
import { Loading } from "./loading";

const Container = tw.div`
  flex h-screen w-screen flex-col items-center justify-center
`;
const Label = tw.span`
  my-3 text-sm tracking-wider text-neutral-400
`;

export const Loader = () => (
  <Container>
    <Label>Initializing...</Label>
    <Loading />
  </Container>
);
