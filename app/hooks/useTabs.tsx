// useTabs hook
import React from "react";

export type Tab = { label: string; id: string; children: React.ReactNode };

export enum TabSwitchDirection {
  None = 0,
  Left = -1,
  Right = 1,
}

export function useTabs({
  tabs,
  initialTabId,
  onChange,
}: {
  tabs: Tab[];
  initialTabId: string;
  onChange?: (id: string) => void;
}) {
  const indexOfInitialTab = tabs.findIndex((tab) => tab.id === initialTabId);

  const [[selectedTabIndex, direction], setSelectedTab] = React.useState<
    [number, TabSwitchDirection]
  >(() => {
    // Check if initialTabId exists in the tabs array
    if (indexOfInitialTab === -1) {
      // Handle the case where initialTabId is not found
      // You could choose to select no tab by default
      // or implement any other appropriate logic for your application
      return [-1, TabSwitchDirection.None]; // -1 indicates no tab is selected
    } else {
      // If initialTabId is found, use its index
      return [indexOfInitialTab, TabSwitchDirection.None];
    }
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
