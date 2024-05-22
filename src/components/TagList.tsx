import { useState } from "react";
import TagButton from "./TagButton";

interface ITagListProps<T extends string> {
  tagList: T[];
  onTagClick: (tag: T) => void;
}

const TagList = <T extends string>({
  tagList,
  onTagClick,
}: ITagListProps<T>) => {
  const [selectedTag, setSelectedTag] = useState<T>(tagList[0]);

  return (
    <div
      className="flx gap-x-4"
      //   여기서 이벤트 위임 방식을 통해 태그 버튼을 클릭했을 때의 이벤트를 처리
      onClick={(event) => {
        const eventTarget = event.target as HTMLButtonElement;
        const tag = eventTarget.textContent as T;
        onTagClick(tag);
      }}
    >
      {tagList.map((tag) => (
        <TagButton
          key={tag}
          isChecked={tag === selectedTag}
          onClick={() => setSelectedTag(tag)}
        >
          {tag}
        </TagButton>
      ))}
    </div>
  );
};

export default TagList;
