import { soundTypes } from "../../utils";

const StatsTab = () => (
  <a
    href="#stats"
    data-bs-toggle="tab"
    data-bs-target="#stats"
    role="tab"
    data-play-sound={soundTypes.scifi_click}
  >
    Stats
  </a>
);

export default StatsTab;
