import { useRef } from "preact/hooks";
import { sounds } from "../../utils";
import ItemsTab from "./items_tab";
import MiscTab from "./misc_tab";
import QuestsTab from "./quests_tab";
import RadioTab from "./radio_tab";
import StatsTab from "./stats_tab";

const Tabs = () => {
  const ref = useRef();
  const playSound = (event) => {
    console.log({ target: event.target.attributes });
    console.log("Played Sound");
    ref.current.play();
  };

  return (
    <div>
      <audio ref={ref} src={sounds.scifi_click}></audio>
      <ul class="pip-foot" role="tablist">
        <li onClick={playSound}>
          <ItemsTab />
        </li>
        <li onClick={playSound}>
          <StatsTab />
        </li>
        <li onClick={playSound}>
          <QuestsTab />
        </li>
        <li onClick={playSound}>
          <MiscTab />
        </li>
        <li onClick={playSound}>
          <RadioTab />
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
