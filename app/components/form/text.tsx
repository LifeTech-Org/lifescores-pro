import { useState } from "react";

export const InputText = ({ value, setValue, placeholder }: { value: string; setValue: (e: string) => void, placeholder: string }) => {
  const [text, setText] = useState(value);
  return <input className="w-full border-none rounded-md bg-zinc-900/60 text-sm text-white mt-4 h-12 px-2" value={text} onChange={(e) => {
    setText(e.target.value);
    setValue(e.target.value)
  }} placeholder={placeholder} />;
};
