import { soundTypes } from "../../utils";

const ProfilesTab = () => (
  <a
    class="active"
    href="#profiles"
    aria-current="page"
    data-bs-toggle="tab"
    data-bs-target="#profiles"
    role="tab"
    aria-selected="true"
    data-play-sound={soundTypes.scifi_click}
  >
    Profiles
  </a>
);

export default ProfilesTab;
