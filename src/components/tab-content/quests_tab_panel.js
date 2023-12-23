import MouseMoveEffect from "../MouseMoveEffect";
import OpenLink from "../OpenLink";
import { soundTypes } from "../../utils";

const data = {
  QuestsTabPanel: [
    {
      title: "Sprinto",
      location: "Remote",
      status: "ACTIVE",
      position: "Full Stack Engineer",
      promotions: [],
      duration: "JUN 2022 - PRESENT",
      showcase: [
        {
          url: "https://sprinto.com/",
          name: "Sprinto",
        },
      ],
      pointers: [
        "Solving exciting problems in the compliance domain and contributing to build a more impactful product at Sprinto",
      ],
      images: [
        "https://res.cloudinary.com/kibibyte/image/upload/v1656879817/sprinto_llkby6.png",
      ],
    },
    {
      title: "X Billion Skills Lab",
      location: "Mumbai",
      status: "Completed",
      position: "Senior Technology Architect",
      promotions: [
        "Sr. Technology Architect - JAN 22",
        "Technology Architect - JAN 21",
      ],
      duration: "JAN 2021 - JUNE 2022",
      showcase: [
        {
          url: "https://learn.xbillionskillslab.com/demo",
          name: "Learn XBSL (WebApp)",
        },
        {
          url: "https://play.google.com/store/apps/details?id=com.xbillionskillslab.xbsl",
          name: "Learn XBSL (Android)",
        },
        {
          url: "https://apps.apple.com/us/app/x-billion-skills-lab/id1533228621",
          name: "Learn XBSL (Apple)",
        },
      ],
      pointers: [
        "Lead developer tasked with building state-of-the-art platform for the next billion job seekers",
        "Helped to bootstrap a startup from MVP to raising Series A",
        "Creative and critical decision making contribution in key product design & development",
        "Single handedly manged an entire all production system web, mobile, admins, databases, devops while on-going development during a period of stretch for 8 months",
        "Architecting the platform and optimizing existing product line",
        "Working in an agile environment helping build and deploy various products with bleeding-edge tech stack NodeJs, GraphQL, Postgres, Docker, React, Flutter, Firebase & Elastic, and Kibana (ELK)",
        "Building several kinds of mini platforms like certificate issuing systems, event management, log management, form builders,etc.",
        "Apart from development I take care of daily server lookup maintenance, patching source code, writing scripts to help colleagues, managing downtimes, and updating the server.",
      ],
      images: [
        "https://res.cloudinary.com/kibibyte/image/upload/v1656872517/xbsl_screen_1_jifx5q.png",
        "https://res.cloudinary.com/kibibyte/image/upload/v1656872517/xbsl_screen_2_gpeas6.webp",
      ],
    },
  ],
};

const getTitleId = (title = "") => title.split(" ").join("_").toLowerCase();

const allQuests = data.QuestsTabPanel.filter((e) => e.hidden !== true).map(
  (e) => ({
    id: getTitleId(e.title),
    data: e,
  })
);

const QuestContent = ({ id, questData = data.QuestsTabPanel[0], isFirst }) => {
  return (
    <div
      class={
        isFirst ? "info tab-pane fade  active show" : "info tab-pane fade "
      }
      id={id}
      role="tabpanel"
      aria-labelledby={`${id}-tab`}
    >
      <div class="post">
        <div className="underlined-title">
          <h4>{questData.title}</h4>
          <span></span>
        </div>
        <p>Status: {questData.status.toUpperCase()}</p>
        <p>Location: {questData.location}</p>
        <p>Position: {questData.position}</p>
        <p>Duration: {questData.duration}</p>
        <p>Promotions: </p>
        <ul>
          {questData.promotions.map((promotion) => (
            <li>● {promotion}</li>
          ))}
        </ul>
        <div style={{ height: "2em" }}></div>
        <p>Showcase: </p>

        <div
          id={`carousel-${id}`}
          class="carousel slide w-100 carousel-fade"
          data-bs-ride="carousel"
          style={{ height: 250 }}
        >
          <div className="carousel-inner w-100">
            {questData.images.map((image, i) => (
              <div
                className={i === 0 ? "carousel-item active" : "carousel-item"}
                // style={{ margin: "0 auto" }}
              >
                <MouseMoveEffect factorX={0.5} factorY={0.5}>
                  <img
                    src={image}
                    style={{
                      width: "100%",
                      maxHeight: 250,
                      objectFit: "contain",
                    }}
                  />
                </MouseMoveEffect>
              </div>
            ))}
          </div>
        </div>
        <ul>
          {questData.showcase.map((showcase) => (
            <li>
              ● {showcase.name} <OpenLink url={showcase.url} />
            </li>
          ))}
        </ul>
        <div style={{ height: "2em" }}></div>
        <p>Key details:</p>
        <ol>
          {questData.pointers.map((pointer) => (
            <li>{pointer}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const SideQuest = () => (
  <div
    class="info tab-pane fade"
    id="side-quests"
    role="tabpanel"
    aria-labelledby="side-quests-tab"
  >
    <div class="post">
      <div className="underlined-title">
        <h4>Kibibyte</h4>
        <span></span>
      </div>
      <p>Duration: 2017 - PRESENT</p>
      <ol>
        <li>
          Building niche tools as an Indie hacker and trying to bootstrap a
          startup of my own
        </li>
        <li>Open-source contribution because I love FOSS.</li>
        <li>
          A freelance developer, ready take on small, simple, complex gigs and
          helping small businesses get a launch their product.
        </li>
      </ol>
      <p style={{ fontSize: 10, textAlign: "center" }}>
        As a passionate programmer I'm always curious to learn more. <br />I
        like to work on meaningful and interesting projects.
      </p>
    </div>
  </div>
);

const Redacted = ({ tabId }) => (
  <div
    class="info tab-pane fade"
    id={`${tabId}`}
    role="tabpanel"
    aria-labelledby={`${tabId}-tab`}
  >
    <div class="post">
      <p>
        DATA CORRUPTED... <br />
        ##$%&'()*+,-./:;=?@[\]^_`|~ <br />
        ERROR! ERROR! ERR0R! 1N#0RM^T10N N0T F0UND <br />
        FILE NOT FOUND. PLEASE CONTACT AN ADMINISTRATOR. <br />
        [DATA EXPUNGED]
        <br /> [REDACTED]
        <br /> ACCESS DENIED...
      </p>
    </div>
  </div>
);

const QuestsTabPanel = ({ content = data.QuestsTabPanel }) => {
  return (
    <div
      class="tab-pane fade"
      role="tabpanel"
      id="quests"
      aria-labelledby="quests-tab"
    >
      <h3 class="pip-title">Quests</h3>
      <div class="pip-body">
        <ul class="options" role="tablist">
          {allQuests.map((quest, i) => (
            <li
              class={i === 0 ? "active" : ""}
              data-bs-toggle="tab"
              data-bs-target={`#${quest.id}`}
              role="tab"
            >
              <a data-play-sound={soundTypes.slide_click}>{quest.data.title}</a>
            </li>
          ))}
          <li data-bs-toggle="tab" data-bs-target="#embedded-inc" role="tab">
            <a data-play-sound={soundTypes.slide_click}>Embedded Inc</a>
          </li>
          <li class="disabled">
            <label>//Null</label>
          </li>
          <li class="disabled">
            <label>//Null</label>
          </li>
          <li data-bs-toggle="tab" data-bs-target="#side-quests" role="tab">
            <a data-play-sound={soundTypes.slide_click}>Side Quests</a>
          </li>
        </ul>
        <div class="tab-content">
          {allQuests.map((quest, i) => (
            <QuestContent
              id={quest.id}
              questData={quest.data}
              isFirst={i === 0}
            />
          ))}
          <Redacted tabId="embedded-inc" />
          <SideQuest />
        </div>
      </div>
    </div>
  );
};

export default QuestsTabPanel;
