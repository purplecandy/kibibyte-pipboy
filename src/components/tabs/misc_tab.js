import { soundTypes } from "../../utils";
const MiscTab = () => (
  <li>
    <a
      href="#misc"
      data-bs-toggle="tab"
      data-bs-target="#misc"
      role="tab"
      data-play-sound={soundTypes.scifi_click}
    >
      Misc
    </a>
  </li>
);

export default MiscTab;
