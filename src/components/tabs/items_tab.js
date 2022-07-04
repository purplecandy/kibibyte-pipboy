import { soundTypes } from "../../utils";

const ItemsTab = () => (
  <a
    class="active"
    href="#items"
    aria-current="page"
    data-bs-toggle="tab"
    data-bs-target="#items"
    role="tab"
    aria-selected="true"
    data-play-sound={soundTypes.scifi_click}
  >
    Profiles
  </a>
);

export default ItemsTab;
