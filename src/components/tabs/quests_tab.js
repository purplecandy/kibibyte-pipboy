import { soundTypes } from "../../utils";

const QuestsTab = () => (
  <a
    href="#quests"
    data-bs-toggle="tab"
    data-bs-target="#quests"
    role="tab"
    data-play-sound={soundTypes.scifi_click}
  >
    Quests
  </a>
);

export default QuestsTab;
