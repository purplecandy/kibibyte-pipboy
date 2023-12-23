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
import SnakeGame from "../snake-game";

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
          <b>Indie Hacks</b> 4
        </span>
        <span class="fade-b">
          <b>Ideas</b>
          72
        </span>
      </li>
      <li>
        <b>Connections</b> 38
      </li>
      <li>
        <b>VAL</b> 2528
      </li>
      <li>
        <b>CND</b>{" "}
        <span class="condition">
          <span class="fill" style="width: 88%;"></span>
        </span>
      </li>
      <li class="span-2">Caffeine Lvls: Over 9000</li>
    </ul>
    <p class="extra" style={{ paddingLeft: 0, overflowY: "auto", height: 100 }}>
      The mastermind behind lemonade stands in the digital age. I turn caffeine
      into companies and ideas into apps that might just take over the world...
      or at least make it more interesting
    </p>
  </div>
);

const TeamPlayerInfo = () => (
  <div>
    <ul class="info-table">
      <li class="vboy-wrap"></li>
      <li class="clear">
        <span class="fade-a">
          <b>Team Wins</b> 27
        </span>
        <span class="fade-b">
          <b>Group Eats</b>52
        </span>
      </li>
      <li>
        <b>High Fives</b> 345
      </li>
      <li>
        <b>Conflicts</b> 0
      </li>
      <li>
        <b>CND</b>{" "}
        <span class="condition">
          <span class="fill" style="width: 98%;"></span>
        </span>
      </li>
      <li class="span-2">Morale 💯</li>
    </ul>
    <p class="extra" style={{ paddingLeft: 0, overflowY: "auto", height: 100 }}>
      I play well with others, especially when there’s pizza involved. I bring
      teams together faster than a Wi-Fi connection, making sure every project
      is a ‘high-five’ moment.
    </p>
  </div>
);

const EntertainerInfo = () => (
  <div>
    <ul class="info-table">
      <li class="vboy-wrap"></li>
      <li class="clear">
        <span class="fade-a">
          <b>Indie Hacks</b> 4
        </span>
        <span class="fade-b">
          <b>Ideas</b>
          72
        </span>
      </li>
      <li>
        <b>Connections</b> 38
      </li>
      <li>
        <b>VAL</b> 2528
      </li>
      <li>
        <b>CND</b>{" "}
        <span class="condition">
          <span class="fill" style="width: 88%;"></span>
        </span>
      </li>
      <li class="span-2">Fans: 1 (Hi Mom!)</li>
    </ul>
    <p class="extra" style={{ paddingLeft: 0, overflowY: "auto", height: 100 }}>
      Putting the 'pro' in procrastination by crafting stories and experiences
      that actually make you want to finish your work early. My content’s so
      engaging, even my mom shares it.
    </p>
  </div>
);

const NerdInfo = () => (
  <div>
    <ul class="info-table">
      <li class="vboy-wrap"></li>
      <li class="clear">
        <b>Tomes Read</b> 137
      </li>
      <li>
        <b>Code Langs</b> 6
      </li>
      <li>
        <b>Gadgets</b> 11
      </li>
      <li>
        <b>CND</b>{" "}
        <span class="condition">
          <span class="fill" style="width: 88%;"></span>
        </span>
      </li>
      <li class="span-2">Trivia Wins: 94%</li>
    </ul>
    <p class="extra" style={{ paddingLeft: 0, overflowY: "auto", height: 100 }}>
      The guru of geekery, with more books than friends and more curiosity than
      a cat. I dive into code like it’s a ball pit and come out with digital
      magic (and sometimes just more questions).
    </p>
  </div>
);

const HandymanInfo = () => (
  <div>
    <ul class="info-table">
      <li class="vboy-wrap"></li>
      <li class="clear">
        <span class="fade-a">
          <b>Bugs</b> 154
        </span>
        <span class="fade-b">
          <b>Bugs Added</b>
          154
        </span>
      </li>
      <li>
        <b>PRs</b> 300+
      </li>
      <li>
        <b>Eureka</b> 29
      </li>
      <li>
        <b>CND</b>{" "}
        <span class="condition">
          <span class="fill" style="width: 91%;"></span>
        </span>
      </li>
      <li class="span-2">Production takedown - 7</li>
    </ul>
    <p class="extra" style={{ paddingLeft: 0, overflowY: "auto", height: 100 }}>
      I solve problems you didn’t even know you had, and occasionally create new
      ones — ever debugged on production?
    </p>
  </div>
);

const ProfilesTabPanel = ({ onClick }) => {
  const [activeProfile, setProfile] = useState(profiles.vaultboy);
  const [isPlaying, setPlaying] = useState(false);

  const playOrStopGame = () => {
    if (isPlaying) {
      setPlaying(false);
    } else {
      setPlaying(true);
    }
  };

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
        <div class="gamePlayControl">
          <div class="right-options" onClick={playOrStopGame}>
            <a
              href="#"
              className={activeProfile === profiles.vaultboy && "disabled"}
            >
              {isPlaying ? "Stop" : "Play"}
            </a>
          </div>
        </div>
        <SnakeGame isMounted={isPlaying} />
        <ul class="options" style={{ display: isPlaying ? "none" : "block" }}>
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
          <div
            class="info-body"
            style={{
              display: isPlaying ? "none" : "block",
            }}
          >
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
