import {
  ArrowDownCircle,
  ArrowRightCircle,
  BookOpen,
  Circle,
  Code,
  FileVideo,
  MoveDiagonal,
  PlusSquare,
  Sparkle,
  StarIcon,
  Trash,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import LinkComponent from "./components/LinkComponent";

function App() {
  // Stupid Icon resize code
  const [size, setSize] = useState(50);
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerHeight / 5);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-background flex h-screen w-screen flex-row flex-wrap text-white">
      <div className="flex h-full flex-1 flex-col">
        <div className="flex h-1/3 w-full items-center pl-10">
          {/* BLOCK 1 */}
          <Sparkle color="#FD6A6B" size={size} className="rotate-45" />
        </div>
        <LinkComponent />
      </div>
      <div className="flex h-full w-1/6 flex-col items-center justify-center gap-10 rounded-xl p-10">
        {/* BLOCK 3 */}
        <Circle color="#FD6A6B" size={size} />
        <Circle color="#FD6A6B" size={size} />
        <Circle color="#FD6A6B" size={size} />
        <Circle color="#FD6A6B" size={size} />
      </div>
      <div className="flex h-full flex-1 flex-col">
        <div className="flex w-full flex-1 items-center gap-5 p-10">
          {/* BLOCK 4 */}
          <div className="bg-primary flex h-full flex-grow flex-col gap-5 rounded-xl p-5">
            <div className="flex w-full flex-row items-center justify-between">
              <Zap color="white" size={70} />
              <div className="flex gap-5">
                <PlusSquare color="white" size={30} />
                <StarIcon color="white" size={30} />
                <Trash color="#FD6A6B" size={30} />
              </div>
            </div>
            <textarea
              name="note"
              className="border-background focus:border-accent h-full rounded-3xl border-4 bg-transparent p-2 text-4xl font-semibold focus:outline-none focus:ring-0"
            />
          </div>
          <ArrowRightCircle color="white" size={70} />
        </div>
        <div className="w-full flex-1 p-10">
          {/* BLOCK 5 */}
          <div className="bg-primary h-full w-full rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
