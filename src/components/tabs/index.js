import ProfilesTab from "./profiles_tab";
import MiscTab from "./misc_tab";
import QuestsTab from "./quests_tab";
import RadioTab from "./radio_tab";
import StatsTab from "./stats_tab";

const Tabs = () => {
  return (
    <div>
      <ul class="pip-foot" role="tablist">
        <li>
          <ProfilesTab />
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
    </div>
  );
};

export default Tabs;
