import ItemsTab from "./items_tab";
import MiscTab from "./misc_tab";
import QuestsTab from "./quests_tab";
import RadioTab from "./radio_tab";
import StatsTab from "./stats_tab";

const Tabs = () => (
  <ul class="pip-foot" role="tablist">
    <li>
      <ItemsTab />
    </li>
    <li>
      <StatsTab />
    </li>
    <li>
      <QuestsTab />
    </li>
    <li>
      <MiscTab />
    </li>
    <li>
      <RadioTab />
    </li>
  </ul>
);

export default Tabs;
