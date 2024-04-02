// App.tsx Component
"use client";
import React from "react";
import TabsUpdate from "./TabsUpdate";
import Tabs from "./Tabs";
import Content from "./Content";
import { useTabs } from "../hooks/useTabs";
import { Circle, Square, Triangle } from "../lib/shapes";

export default function App() {
  const framer = useTabs({
    tabs: [
      {
        label: "Circle",
        children: <Circle />,
        id: "Circle",
      },
      {
        label: "Triangle",
        children: <Triangle />,
        id: "Triangle",
      },
      {
        label: "Square",
        children: <Square />,
        id: "Square",
      },
    ],
    initialTabId: "Triangle",
  });

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-24">
      <div className="max-w-6xl">
        <Tabs {...framer.tabProps} />
        <Content
          {...framer.contentProps}
          className="flex flex-col items-center rounded-3xl py-9 text-center"
        >
          {framer.selectedTab.children}
        </Content>
      </div>
    </div>
  );
}
