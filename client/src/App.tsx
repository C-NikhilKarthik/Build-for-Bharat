import React from "react";
import Navbar from "./components/navbar";
import Tab from "./components/tabs";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen flex p-4 pt-28 items-center justify-center h-full min-h-screen bg-[url('https://cdn.wallpapersafari.com/20/80/jQPMT3.jpg')] bg-cover bg-center">
        <Navbar />
        {/* <div className="max-w-[600px] gap-8 w-full flex-col h-full flex lg:flex-row">
        <div className="flex flex-col h-full justify-center w-full gap-8">
          <button className="rounded px-4 py-2 bg-blue-600 text-white font-semibold text-xl">
            Merchant Delivers
          </button>

          <button className="rounded px-4 py-2 bg-blue-600/20 border border-blue-500 text-white font-semibold text-xl">
            Add Merchant
          </button>
        </div>
        <div className="flex w-full flex-col bg-slate-900/20 p-4 border-2 border-blue-500 border-dashed gap-6 rounded">
          <select className="rounded px-3 py-1">
            <option value="def">Select Pincode</option>
          </select>

          <button className="rounded-full px-2 py-1 bg-blue-600 text-white text-sm">
            Submit
          </button>

          <div className="text-slate-600">Merchants Available</div>
          <div className="p-4 rounded bg-slate-600/50 backdrop-blur w-full aspect-square"></div>
        </div>
      </div> */}
        <Tab />
      </div>
    </ThemeProvider>
  );
}
