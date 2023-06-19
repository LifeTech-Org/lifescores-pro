import { useContext, useState } from "react";
import Filter from "./Filter";
import Footer from "./Footer";
import Header from "./Header";
import { PopupContext } from "@/context";
import Popup from "./Popup";

export default function Layout({ children }: { children: JSX.Element }) {
  const [popup, setPopup] = useState<null | JSX.Element>(null);
  return (
    <PopupContext.Provider value={setPopup}>
      <div className="flex flex-col h-screen w-full bg-zinc-950">
        {popup && <Popup element={popup} setPopup={setPopup} />}
        <Header />
        <div className="flex flex-col sm:flex-row flex-1">
          <Filter />
          <section className="sm:flex-1">
            <main>{children}</main>
          </section>
        </div>
      </div>
    </PopupContext.Provider>
  );
}
