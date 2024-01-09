import { useTheme } from "next-themes";
import { opts } from "@utils/helpers";
import { Dark, Item, Light, Mode, Wrap } from "./styled";

export const Panel = () => {
  const { theme, setTheme } = useTheme();

  const handleChangeMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const ModeOptions = () => {
    const options = opts(<Light />, <Dark />);
    return (
      <Mode mode={theme} onClick={handleChangeMode}>
        {options.get(theme === "dark")}
      </Mode>
    );
  };
  return (
    <Wrap>
      <Item>
        <ModeOptions />
      </Item>
    </Wrap>
  );
};
