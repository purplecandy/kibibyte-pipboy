import { Carousel } from "bootstrap";
import { useEffect, useRef, useState } from "preact/hooks";
import OpenLink from "../OpenLink";

const groups = Object.freeze({
  none: "none",
  frontend: "Frontend",
  backend: "Backend",
  databases: "Databases",
  apis: "APIs",
  sdks: "SDKs",
  devops: "DevOps",
  misc: "Misc",
});

const allGroups = Object.entries(groups).filter(
  ([key, value]) => value !== "none"
);

const groupTagsMap = Object.freeze({
  none: [],
  frontend: ["HTML", "CSS", "Javascript / Typescript", "React", "Flutter"],
  backend: ["Dart", "Python", "NodeJS"],
  databases: ["PostgreSQL", "MongoDB", "Firebase Firestore", "Redis"],
  apis: ["REST", "GraphQL", "WebSockets"],
  sdks: [
    "Firebase",
    "Fastify",
    "NextJs",
    "Sequelize",
    "Prisma",
    "Jimp",
    "Pdf-Lib",
    "ChartJS",
    "Redux",
    "Streams",
  ],
  devops: ["Docker", "EC2", "AWS", "Lightsail", "Linux", "Caddy"],
  misc: ["Hasura", "Razorpay", "Git"],
});

const groupTags = Object.entries(groupTagsMap);

const content = {
  Crafted: [
    {
      title: "Ural",
      description: "A screenshot organizer with machine learning",
      link: "https://github.com/purplecandy/ural/tree/master/flutter",
      pointers: [
        "A screenshot organizer that finds your screenshot by its contents.",
        "You can search for the screenshot by describing it like bank statement, amazon, hand bang",
        "Effectively performing OCR in the background and caching to SQLite",
      ],
    },
    {
      title: "Nano",
      description: "A state management library for Flutter",
      link: "https://flutter-nano.surge.sh/",
      pointers: [
        "Nano is a modular state management library with a strict architectural pattern",
        "Predictable, fully asynchronous, terse",
        "Nano is an evolution of all my own state management tools built ever since Flutter was in Alpha.",
      ],
    },
    {
      title: "Kibibyte Drive",
      description: "A microservice for cloning drive files",
      link: "https://github.com/purplecandy/kibibytedrive",
      pointers: [
        "A simple tool developed with React and Node for quickly cloning files between drive accounts",
      ],
    },
  ],
};

const SkillTag = ({ activeGroup, groupName, group = [] }) => {
  if (activeGroup === groupName)
    return (
      <>
        {group.map((name) => (
          <a className="p-2">{name}</a>
        ))}
      </>
    );
  else
    return (
      <>
        {group.map((name) => (
          <a className="p-2 disabled">{name}</a>
        ))}
      </>
    );
};

const Skills = () => {
  const [activeGroup, setGroup] = useState(groups.none);

  const handleMouseHover = (group) => {
    setGroup(group);
  };

  const handleMouseLeave = () => {
    setGroup(groups.none);
  };

  return (
    <div
      class="tab-pane fade in active show"
      show
      id="skills"
      role="tabpanel"
      aria-labelledby="skills-tab"
    >
      <div class="stats-page">
        <h4>STACK</h4>

        <div className="d-flex mt-2 justify-content-evenly">
          {allGroups.map(([groupType, groupName]) => (
            <a
              className="mr-2 p-2"
              onMouseEnter={() => handleMouseHover(groupType)}
              onMouseLeave={handleMouseLeave}
            >
              {groupName}
            </a>
          ))}
        </div>
        <div style={{ height: "10vh" }}></div>
        <p style={{ textAlign: "center", fontSize: 10 }}>
          I usually work with a lot more tools but to summaries following are my
          frequent pick
        </p>
        <div className="container d-flex flex-wrap justify-content-center">
          {groupTags.map(([group, tags]) => (
            <SkillTag
              activeGroup={activeGroup}
              groupName={group}
              group={tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CraftedItem = ({ title, description, pointers, link, isFirst }) => (
  <div className={isFirst ? "carousel-item active" : "carousel-item"}>
    <div className="underlined-title d-flex align-items-center">
      <h4 className="flex-grow-1">
        {title.toUpperCase()}{" "}
        <span>
          <a>
            <OpenLink url={link} />
          </a>
        </span>
      </h4>
      <div>
        <a
          className="p-1"
          data-bs-target="#carousel-crafted"
          data-bs-slide="prev"
          role="button"
        >
          {"<"}
        </a>{" "}
        <a
          className="p-1"
          data-bs-target="#carousel-crafted"
          data-bs-slide="next"
          role="button"
        >
          {">"}
        </a>
      </div>
    </div>
    <div className="container mt-2">
      <p>{description}</p>
      <ol>
        {pointers.map((pointer, i) => (
          <li key={i}>{pointer}</li>
        ))}
      </ol>
    </div>
  </div>
);

// Crafted
const Crafted = ({ data = content.Crafted }) => {
  return (
    <div
      class="tab-pane fade in active show"
      show
      id="crafted"
      role="tabpanel"
      aria-labelledby="skills-tab"
    >
      <div
        id="carousel-crafted"
        class="stats-page carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {data.map((e, i) => (
            <CraftedItem key={i} isFirst={i === 0} {...e} />
          ))}
        </div>
      </div>
    </div>
  );
};
// --Crafted

const StatsTabPanel = () => {
  const title = useRef();
  const stimpack = useRef();

  useEffect(() => {}, []);

  return (
    <div
      class="tab-pane fade"
      role="tabpanel"
      id="stats"
      aria-labelledby="stats-tab"
    >
      <h3 class="pip-title">Stats</h3>
      <ul class="pip-head">
        <li>
          <b>LVL</b> 11
        </li>
        <li>
          <b>HP</b> 89/110
        </li>
        <li>
          <b>AP</b> 38/40
        </li>
        <li>
          <b>XP</b> 73.8%
        </li>
      </ul>
      <div class="pip-body">
        <ul class="side-menu" role="tablist">
          <li
            class="active"
            data-bs-toggle="tab"
            data-bs-target="#skills"
            role="tab"
          >
            <a>STACK</a>
          </li>
          <li data-bs-toggle="tab" data-bs-target="#crafted" role="tab">
            <a>CRAFTED</a>
          </li>
          <li data-bs-toggle="tab" data-bs-target="#eff" role="tab">
            <a>EFF</a>
          </li>
          <li class="disabled">
            <a href="#">H20</a>
          </li>
          <li class="disabled">
            <a href="#">FOD</a>
          </li>
          <li class="disabled">
            <div ref={stimpack}>
              <a href="#">SLP</a>
            </div>
          </li>
        </ul>
        <div class="tab-content">
          <Skills />
          <Crafted />
        </div>
      </div>
    </div>
  );
};

export default StatsTabPanel;

// <div
// class="tab-pane fade in active show"
// show
// id="cnd"
// role="tabpanel"
// aria-labelledby="cnd-tab"
// >
// <div class="stats-page">
//   <h4>Condition</h4>

//   <div class="right-options" ref={title}>
//     <a href="#">(4) Stimpak</a>
//     <a href="#" class="disabled">
//       (0) Doctor's Bag
//     </a>
//   </div>
// </div>
// </div>
// <div
// class="tab-pane fade"
// id="rad"
// role="tabpanel"
// aria-labelledby="rad-tab"
// >
// <div class="stats-page">
//   <h4>Radiation</h4>
//   <ul>
//     <li>No data.</li>
//   </ul>
// </div>
// </div>
// <div
// class="tab-pane fade"
// id="eff"
// role="tabpanel"
// aria-labelledby="eff-tab"
// >
// <div class="stats-page">
//   <h4>Effects</h4>
//   <ul>
//     <li>No data.</li>
//     <li>No data.</li>
//     <li>No data.</li>
//     <li>No data.</li>
//     <li>No data.</li>
//     <li>No data.</li>
//     <li>No data.</li>
//     <li>No data.</li>
//     <li>No data.</li>
//     <li>No data.</li>
//     <li>No data.</li>
//     <li>No data.</li>
//     <li>No data.</li>
//     <li>No data.</li>
//   </ul>
// </div>
// </div>
