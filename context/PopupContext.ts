import { PopupContextType } from "@/public/utils/types";
import { Dispatch, SetStateAction, createContext } from "react";

export const PopupContext = createContext<PopupContextType>(() => {});
