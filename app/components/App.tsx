// App.tsx Component
"use client";
import React from "react";
import { Framer } from "./Framer";
import { useTabs } from "../hooks/useTabs";
import { Circle, Square, Triangle } from "../lib/shapes";

export default function App() {
  const [hookProps] = React.useState({
    tabs: [
      {
        label: Circle,
        children: <Circle />,
        id: "Circle",
      },
      {
        label: Triangle,
        children: <Triangle />,
        id: "Triangle",
      },
      {
        label: Square,
        children: <Square />,
        id: "Square",
      },
    ],
    initialTabId: "Triangle",
  });

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
        <Framer.Tabs {...framer.tabProps} />
        <Framer.Content
          {...framer.contentProps}
          className="flex flex-col items-center rounded-3xl py-9 text-center"
        >
          {framer.selectedTab.children}
        </Framer.Content>
      </div>
    </div>
  );
}
