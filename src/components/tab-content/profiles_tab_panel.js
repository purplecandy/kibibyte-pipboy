import fullstack_vault_boy_gif from "../../assets/gifs/fullstack_vault_boy.gif";
import vaultboy_gif from "../../assets/gifs/vaultboy.gif";
import teamplayer_gif from "../../assets/gifs/teamplayer.gif";
import handyman_gif from "../../assets/gifs/handyman.gif";
import nerd_gif from "../../assets/gifs/nerd.gif";
import entertainer_gif from "../../assets/gifs/entertainer.gif";
import { useState } from "preact/hooks";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import MouseMoveEffect from "../MouseMoveEffect";
import { soundTypes } from "../../utils";

const profiles = Object.freeze({
  vaultboy: "vaultboy",
  fullstack: "fullstack",
  teamplayer: "teamplayer",
  entertainer: "entertainer",
  nerd: "nerd",
  handyman: "handyman",
});

const VaultBoyGif = () => (
  <div
    class="vboy"
    style={{
      margin: "0 auto",
      marginLeft: 120,
      background: `url(${vaultboy_gif})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    }}
  ></div>
);

const FullStackGif = () => (
  <div
    class="vboy"
    style={{
      margin: "0 auto",
      marginLeft: 80,
      background: `url(${fullstack_vault_boy_gif})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    }}
  ></div>
);

const TeamPlayerGif = () => (
  <div
    class="vboy"
    style={{
      margin: "0 auto",
      marginTop: -40,
      marginBottom: -40,
      marginLeft: 70,
      height: 240,
      background: `url(${teamplayer_gif})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    }}
  ></div>
);

const EntertainerGif = () => (
  <div
    class="vboy"
    style={{
      margin: "0 auto",
      marginLeft: 60,
      background: `url(${entertainer_gif})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    }}
  ></div>
);

const NerdGif = () => (
  <div
    class="vboy"
    style={{
      margin: "0 auto",
      marginTop: -20,
      marginBottom: -40,
      marginLeft: 60,
      height: 220,
      background: `url(${nerd_gif})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    }}
  ></div>
);

const HandymanGif = () => (
  <div
    class="vboy"
    style={{
      margin: "0 auto",
      marginLeft: 60,
      background: `url(${handyman_gif})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    }}
  ></div>
);

const FullStackInfo = () => (
  <div>
    <ul class="info-table">
      <li class="vboy-wrap"></li>
      <li class="clear">
        <span class="fade-a">
          <b>DAM</b> 52
        </span>
        <span class="fade-b">
          <b>DPS</b>
          49.3
        </span>
      </li>
      <li>
        <b>WG</b> 6.00
      </li>
      <li>
        <b>VAL</b> 2528
      </li>
      <li>
        <b>CND</b>{" "}
        <span class="condition">
          <span class="fill" style="width: 8%;"></span>
        </span>
      </li>
      <li class="span-2">.308 round (5/72)</li>
    </ul>
    <p class="extra" style={{ overflowY: "auto", height: 100 }}>
      <b>Description</b> Contrary to popular belief, Lorem Ipsum is not simply
      random text. It has roots in a piece of classical
    </p>
  </div>
);

const TeamPlayerInfo = () => (
  <div>
    <ul class="info-table">
      <li class="vboy-wrap"></li>
      <li class="clear">
        <span class="fade-a">
          <b>DAM</b> 52
        </span>
        <span class="fade-b">
          <b>DPS</b>
          49.3
        </span>
      </li>
      <li>
        <b>WG</b> 6.00
      </li>
      <li>
        <b>VAL</b> 2528
      </li>
      <li>
        <b>CND</b>{" "}
        <span class="condition">
          <span class="fill" style="width: 8%;"></span>
        </span>
      </li>
      <li class="span-2">.308 round (5/72)</li>
    </ul>
    <p class="extra" style={{ overflowY: "auto", height: 100 }}>
      <b>Description</b> Contrary to popular belief, Lorem Ipsum is not simply
      random text. It has roots in a piece of classical
    </p>
  </div>
);

const EntertainerInfo = () => (
  <div>
    <ul class="info-table">
      <li class="vboy-wrap"></li>
      <li class="clear">
        <span class="fade-a">
          <b>DAM</b> 52
        </span>
        <span class="fade-b">
          <b>DPS</b>
          49.3
        </span>
      </li>
      <li>
        <b>WG</b> 6.00
      </li>
      <li>
        <b>VAL</b> 2528
      </li>
      <li>
        <b>CND</b>{" "}
        <span class="condition">
          <span class="fill" style="width: 8%;"></span>
        </span>
      </li>
      <li class="span-2">.308 round (5/72)</li>
    </ul>
    <p class="extra" style={{ overflowY: "auto", height: 100 }}>
      <b>Description</b> Contrary to popular belief, Lorem Ipsum is not simply
      random text. It has roots in a piece of classical
    </p>
  </div>
);

const NerdInfo = () => (
  <div>
    <ul class="info-table">
      <li class="vboy-wrap"></li>
      <li class="clear">
        <span class="fade-a">
          <b>DAM</b> 52
        </span>
        <span class="fade-b">
          <b>DPS</b>
          49.3
        </span>
      </li>
      <li>
        <b>WG</b> 6.00
      </li>
      <li>
        <b>VAL</b> 2528
      </li>
      <li>
        <b>CND</b>{" "}
        <span class="condition">
          <span class="fill" style="width: 8%;"></span>
        </span>
      </li>
      <li class="span-2">.308 round (5/72)</li>
    </ul>
    <p class="extra" style={{ overflowY: "auto", height: 100 }}>
      <b>Description</b> Contrary to popular belief, Lorem Ipsum is not simply
      random text. It has roots in a piece of classical
    </p>
  </div>
);

const HandymanInfo = () => (
  <div>
    <ul class="info-table">
      <li class="vboy-wrap"></li>
      <li class="clear">
        <span class="fade-a">
          <b>DAM</b> 52
        </span>
        <span class="fade-b">
          <b>DPS</b>
          49.3
        </span>
      </li>
      <li>
        <b>WG</b> 6.00
      </li>
      <li>
        <b>VAL</b> 2528
      </li>
      <li>
        <b>CND</b>{" "}
        <span class="condition">
          <span class="fill" style="width: 8%;"></span>
        </span>
      </li>
      <li class="span-2">.308 round (5/72)</li>
    </ul>
    <p class="extra" style={{ overflowY: "auto", height: 100 }}>
      <b>Description</b> Contrary to popular belief, Lorem Ipsum is not simply
      random text. It has roots in a piece of classical
    </p>
  </div>
);

const ProfilesTabPanel = ({ onClick }) => {
  const [activeProfile, setProfile] = useState(profiles.vaultboy);

  return (
    <div
      class="tab-pane fade show active"
      role="tabpanel"
      id="profiles"
      aria-labelledby="profiles-tab"
    >
      <h3 class="pip-title">Profiles</h3>
      <ul class="pip-head">
        <li>
          <b>Wg</b> 34/125
        </li>
        <li>
          <b>HP</b> 89/110
        </li>
        <li>
          <span class="fade-a">
            <b>DT</b> 21
          </span>
          <span class="fade-b">
            <b>DR</b> 11
          </span>
        </li>
        <li>
          <b>Caps</b> 1721
        </li>
      </ul>
      <div class="pip-body">
        <ul class="options">
          <li>
            <input
              type="radio"
              id="radio1"
              name="radio"
              onChange={() => setProfile(profiles.fullstack)}
              data-play-sound={soundTypes.slide_click}
            />
            <label for="radio1">Entrepreneur</label>
          </li>
          <li>
            <input
              type="radio"
              id="radio2"
              name="radio"
              onChange={() => setProfile(profiles.entertainer)}
              data-play-sound={soundTypes.slide_click}
            />
            <label for="radio2">Entertainer</label>
          </li>
          <li>
            <input
              type="radio"
              id="radio3"
              name="radio"
              onChange={() => setProfile(profiles.teamplayer)}
              data-play-sound={soundTypes.slide_click}
            />
            <label for="radio3">Team Player</label>
          </li>
          <li>
            <input
              type="radio"
              id="radio4"
              name="radio"
              onChange={() => setProfile(profiles.handyman)}
              data-play-sound={soundTypes.slide_click}
            />
            <label for="radio4">Problem Solver</label>
          </li>
          <li>
            <input
              type="radio"
              id="radio5"
              name="radio"
              onClick={() => setProfile(profiles.nerd)}
              data-play-sound={soundTypes.slide_click}
            />
            <label for="radio5">Nerd</label>
          </li>
        </ul>
        <div class="info">
          <div class="right-options">
            <a href="#" class="disabled">
              Maintain
            </a>
            <a href="#">Mod</a>
          </div>
          <div class="info-body">
            <MouseParallaxContainer>
              <MouseParallaxChild factorX={0.1} factorY={0.1}>
                {
                  {
                    [profiles.fullstack]: <FullStackGif />,
                    [profiles.entertainer]: <EntertainerGif />,
                    [profiles.teamplayer]: <TeamPlayerGif />,
                    [profiles.handyman]: <HandymanGif />,
                    [profiles.nerd]: <NerdGif />,
                    [profiles.vaultboy]: <VaultBoyGif />,
                  }[activeProfile]
                }
              </MouseParallaxChild>
            </MouseParallaxContainer>
            {
              {
                [profiles.fullstack]: <FullStackInfo />,
                [profiles.entertainer]: <EntertainerInfo />,
                [profiles.teamplayer]: <TeamPlayerInfo />,
                [profiles.handyman]: <HandymanInfo />,
                [profiles.nerd]: <NerdInfo />,
                [profiles.vaultboy]: <p>Please select a profile</p>,
              }[activeProfile]
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilesTabPanel;
