import { createContext} from "react";
import { DropdownMenuShared } from "./DropdownMenuProps";

export const DropdownMenuContext = createContext<DropdownMenuShared>({} as DropdownMenuShared);