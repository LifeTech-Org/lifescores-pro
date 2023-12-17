import { PopupContextType } from "@/app/utils/types";
import { Dispatch, SetStateAction, createContext } from "react";

export const PopupContext = createContext<PopupContextType>(() => {});
