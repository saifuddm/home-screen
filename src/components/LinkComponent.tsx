import {
  Code,
  MoveDiagonal,
  BookOpen,
  FileVideo,
  ArrowDownCircle,
  IceCream,
  ArrowUpCircle,
  Music,
} from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";

interface CategoryBlockInfo {
  name: string;
  icon: React.ReactNode;
  description: string;
  expanded: boolean;
  link: string[];
}
const categoryBlockInfo: CategoryBlockInfo[] = [
  {
    name: "Code",
    icon: <Code color="white" size={70} />,
    description: "Code for the project",
    expanded: true,
    link: ["https://github.com/saifuddm"],
  },
  {
    name: "Book",
    icon: <BookOpen color="white" size={70} />,
    description: "Book for the project",
    expanded: false,
    link: ["https://audible.com"],
  },
  {
    name: "Video",
    icon: <FileVideo color="white" size={70} />,
    description: "Video for the project",
    expanded: false,
    link: ["https://youtube.com"],
  },
  {
    name: "Chill",
    icon: <IceCream color="white" size={70} />,
    description: "Chill for the project",
    expanded: false,
    link: ["https://www.youtube.com"],
  },
  {
    name: "Music",
    icon: <Music color="white" size={70} />,
    description: "Music for the project",
    expanded: false,
    link: ["https://www.spotify.com"],
  },
];

function LinkComponent() {
  //Can only show three blocks, track blocks to show
  const [limitShownBlocks, setLimitShownBlocks] = React.useState(3);
  const [startIndex, setStartIndex] = React.useState(0);

  function PaginationButtons() {
    const reachedEndOfList =
      startIndex + limitShownBlocks >= categoryBlockInfo.length;
    const reachedStartOfList = startIndex - limitShownBlocks < 0;

    const handleArrowDownClick = () =>
      !reachedEndOfList && setStartIndex(startIndex + 3);
    const handleArrowUpClick = () =>
      !reachedStartOfList && setStartIndex(startIndex - 3);

    if (reachedEndOfList) {
      return (
        <ArrowUpCircle color="white" size={70} onClick={handleArrowUpClick} />
      );
    }
    return (
      <ArrowDownCircle color="white" size={70} onClick={handleArrowDownClick} />
    );
  }

  // Expanding using by reducing the slice size
  const handleExpandClick = (name: string) => {
    // //Logging
    // console.log("Expanding ", index);
    // console.log("Start index ", startIndex);
    // console.log("Limit shown blocks ", limitShownBlocks);
    console.log("Expanding ", name);

    const indexTriggeredExpand = categoryBlockInfo.findIndex(
      (blockInfo) => blockInfo.name === name,
    );

    //Check if something is already expanded
    if (startIndex === indexTriggeredExpand && limitShownBlocks === 1) {
      console.log("Already expanded");
      setLimitShownBlocks(3);
      setStartIndex(0);
      return;
    }

    console.log("Index triggered expand ", indexTriggeredExpand);

    setStartIndex(indexTriggeredExpand);
    setLimitShownBlocks(1);
  };

  // Expand by changing the style

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-5 p-10">
      {categoryBlockInfo
        .slice(startIndex, startIndex + limitShownBlocks)
        .map((blockInfo, index) => (
          <div
            className="bg-primary relative flex w-full flex-grow items-center rounded-xl pl-5"
            key={index}
          >
            {blockInfo.icon}
            <div
              className="absolute bottom-5 right-5"
              onClick={() => handleExpandClick(blockInfo.name)}
            >
              <MoveDiagonal color="white" size={30} />
            </div>
          </div>
        ))}
      <PaginationButtons />
    </div>
  );
}

export default LinkComponent;
