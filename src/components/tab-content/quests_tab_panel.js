import MouseMoveEffect from "../MouseMoveEffect";
import OpenLink from "../OpenLink";

const data = {
  QuestsTabPanel: [
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

const allQuests = data.QuestsTabPanel.map((e) => ({
  id: getTitleId(e.title),
  data: e,
}));

const QuestContent = ({ id, questData = data.QuestsTabPanel[0], isFirst }) => {
  return (
    <div
      class={
        isFirst ? "info tab-pane fade-in active show" : "info tab-pane fade-in "
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
              <a>{quest.data.title}</a>
            </li>
          ))}
          <li class="disabled">
            <label>//Null</label>
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
          <div
            class="info tab-pane fade"
            id="quest-2"
            role="tabpanel"
            aria-labelledby="quest-2-tab"
          >
            <div class="post">
              <p>Fallput: Battle Royale</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestsTabPanel;
