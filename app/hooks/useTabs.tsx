// useTabs hook

import React from "react";

export type Tab = { label: string; id: string; children: React.ReactNode };

export function useTabs({
  tabs,
  initialTabId,
  onChange,
}: {
  tabs: Tab[];
  initialTabId: string;
  onChange?: (id: string) => void;
}) {
  const [[selectedTabIndex, direction], setSelectedTab] = React.useState(() => {
    const indexOfInitialTab = tabs.findIndex((tab) => tab.id === initialTabId);
    return [indexOfInitialTab === -1 ? 0 : indexOfInitialTab, 0];
  });
  return {
    tabProps: {
      tabs,
      selectedTabIndex,
      onChange,
      setSelectedTab,
    },
    selectedTab: tabs[selectedTabIndex],
    contentProps: {
      direction,
      selectedTabIndex,
    },
  };
}
