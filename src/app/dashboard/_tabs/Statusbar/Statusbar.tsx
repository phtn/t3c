"use client";

import { useCallback, useContext, useEffect } from "react";
import {
  ActiveStatus,
  HStack,
  InactiveStatus,
  StatusLeft,
  StatusRight,
  VersionNumber,
} from "./styled";
import { useServerStatus } from "./hooks";
import { opts } from "@utils/helpers";
import { onInfo } from "@utils/toast";
import { Panel } from "./Panel";
import { AuthContext } from "src/app/_home/Main/Context";

const Statusbar = () => {
  const { status } = useServerStatus();

  useEffect(() => {
    if (status) {
      onInfo("Server online");
    }
  }, []);

  const Status = useCallback(() => {
    const options = opts(<ActiveStatus />, <InactiveStatus />);
    return <StatusLeft>{options.get(status)}</StatusLeft>;
  }, [status]);

  return (
    <HStack>
      <Status />
      <Panel />
      <StatusRight>
        <code className="text-[10px]"></code>
        <VersionNumber />
      </StatusRight>
    </HStack>
  );
};
export default Statusbar;
