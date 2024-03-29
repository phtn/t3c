import FlatList from "@@components/flatlist";
import { Uploads } from "../styled";
import { useCallback } from "react";
import FileItem from "./FileItem";
import { SectionLabel } from "@@components/label";
import { FileTextIcon } from "@radix-ui/react-icons";
type RenderProps = {
  item: File;
  index?: number;
};

type AttachmentProps = {
  data: File[] | null;
  fileRemove: (index: number) => void;
};

export const Attachments = ({ data, fileRemove }: AttachmentProps) => {
  const renderItem = useCallback(
    (props: RenderProps) => {
      const { name, size, type } = props.item;
      return (
        <FileItem
          index={props.index!}
          name={name}
          size={size}
          type={type}
          onPress={fileRemove}
        />
      );
    },
    [fileRemove],
  );
  return (
    <Uploads>
      <SectionLabel label="Attachments" extra={`[ ${data?.length ?? 0} ]`}>
        <FileTextIcon />
      </SectionLabel>
      <FlatList
        bgcolor="bg-neutral-50 dark:bg-transparent/20 h-[255px] rounded-lg p-[3px] border dark:border-slate-800"
        data={data}
        keyExtractor={(item, index) =>
          `${item.name || `${Date.now().toString(20)}`}_${index}`
        }
        renderItem={(item, index) => renderItem({ item, index })}
      />
    </Uploads>
  );
};
