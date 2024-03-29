import { soundTypes } from "../../utils";

const RadioTab = () => (
  <a
    href="#radio"
    data-bs-toggle="tab"
    data-bs-target="#radio"
    role="tab"
    data-play-sound={soundTypes.scifi_click}
  >
    Tapes
  </a>
);

export default RadioTab;
