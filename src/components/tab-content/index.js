import ItemsTabPanel from "./items_tab_panel";
import QuestsTabPanel from "./quests_tab_panel";
import StatsTabPanel from "./stats_tab_panel";
import MiscTabPanel from "./misc_tab_panel";
import RadioTabPanel from "./radio_tab_panel";

const TabContent = () => (
  <div class="tab-content">
    <ItemsTabPanel />
    <StatsTabPanel />
    <QuestsTabPanel />
    <MiscTabPanel />
    <RadioTabPanel />
  </div>
);

export default TabContent;
