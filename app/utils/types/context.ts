import { Dispatch, SetStateAction } from "react";

export type PopupContextType = Dispatch<SetStateAction<JSX.Element | null>>;
