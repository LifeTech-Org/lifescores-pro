import { PopupContextType } from "@/public/utils/types";

export default function Popup({
  element,
  setPopup,
}: {
  element: JSX.Element;
  setPopup: PopupContextType;
}) {
  return (
    <div className="absolute right-0  h-screen left-0 z-20 flex items-center justify-center  px-4">
      {element}
      <div
        className="absolute h-screen right-0  left-0  backdrop-blur-sm bg-zinc-950/20"
        onClick={() => setPopup(null)}
      ></div>
    </div>
  );
}
