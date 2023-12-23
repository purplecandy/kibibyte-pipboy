const MiscTabPanel = () => {
  const getColor = (colorType) => {
    const r = document.querySelector(":root");
    r.className = colorType;
  };

  return (
    <div
      class="tab-pane fade"
      role="tabpanel"
      id="misc"
      aria-labelledby="misc-tab"
    >
      <h3 class="pip-title">Misc</h3>
      <div class="pip-body">
        <ul class="options" role="tablist">
          <li
            data-bs-toggle="tab"
            data-bs-target="#misc-1"
            role="tab"
            class="active"
          >
            <a>Backlight Color</a>
          </li>
          <li data-bs-toggle="tab" data-bs-target="#misc-2" role="tab">
            <a>Now she's gone</a>
          </li>
          <li data-bs-toggle="tab" data-bs-target="#misc-3" role="tab">
            <a>Memory</a>
          </li>
          <li data-bs-toggle="tab" data-bs-target="#misc-4" role="tab">
            <a>Irresistible</a>
          </li>
          <li data-bs-toggle="tab" data-bs-target="#misc-5" role="tab">
            <a>Dreams</a>
          </li>
        </ul>
        <div class="tab-content">
          <div
            class="info active tab-pane fade in show"
            id="misc-1"
            role="tabpanel"
            aria-labelledby="misc-1-tab"
          >
            <div class="post">
              <p>Select HUD / Backlight Color</p>
              <form class="colors">
                <input
                  id="b-amber"
                  type="radio"
                  name="colors"
                  value="amber"
                  checked
                  onChange={(e) => getColor("amber")}
                />
                <label for="b-amber">Amber</label>
                <input
                  id="b-red"
                  type="radio"
                  name="colors"
                  value="red"
                  onChange={(e) => getColor("red")}
                />
                <label for="b-red">Red</label>
                <input
                  id="b-green"
                  type="radio"
                  name="colors"
                  value="green"
                  onChange={(e) => getColor("green")}
                />
                <label for="b-green">Green</label>
                <input
                  id="b-blue"
                  type="radio"
                  name="colors"
                  value="blue"
                  onChange={(e) => getColor("blue")}
                />
                <label for="b-blue">Blue</label>
                <input
                  id="b-white"
                  type="radio"
                  name="colors"
                  value="white"
                  onChange={(e) => getColor("white")}
                />
                <label for="b-white">White</label>
                <input
                  id="b-black"
                  type="radio"
                  name="colors"
                  value="black"
                  onChange={(e) => getColor("black")}
                />
                <label for="b-black">Science!</label>
              </form>
            </div>
          </div>

          <div
            class="info tab-pane fade"
            id="misc-2"
            role="tabpanel"
            aria-labelledby="misc-2-tab"
          >
            <div class="post">
              <p>
                You wanted to be my bestie <br />
                I cried on your shoulder
                <br />
                <br />
                We laughed
                <br />
                We enjoyed
                <br />
                We stayed up late
                <br />
                <br />
                We walked on a different path
                <br />
                But promised to watch each other's back
                <br />
                It's only been a few months
                <br />
                <br />
                But you do not talk anymore...like a stranger
                <br />
                Are we speaking a different tounge?
                <br />
                You said it hurts when you see me hurt
                <br />
                Do we still have that connection?
                <br />
                Do you miss me as I miss you?
                <br />
                <br />
                I'm looking for you in these fading memories
                <br />
                When you see this I want you to just look back
                <br />
                <br />
                I wish it's just the wind <br />
                flowing in different directions
                <br />
                and these letters reach out to you one day
                <br />
              </p>
            </div>
          </div>

          <div
            class="info tab-pane fade"
            id="misc-3"
            role="tabpanel"
            aria-labelledby="misc-3-tab"
          >
            <div class="post">
              <p>For you my brain remembers every little detail </p>
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
          <div
            class="info tab-pane fade"
            id="misc-4"
            role="tabpanel"
            aria-labelledby="misc-4-tab"
          >
            <div class="post">
              <p>
                You’re magic. You shine.
                <br />
                You’re a starry night in a field miles and miles away from the
                city lights.
                <br />
                It’s no wonder everyone is drawn to you.
                <br />I tried to resist and was pulled into your orbit like all
                the others.
              </p>
            </div>
          </div>
          <div
            class="info tab-pane fade"
            id="misc-5"
            role="tabpanel"
            aria-labelledby="misc-5-tab"
          >
            <div class="post">
              <p>In the end the dreams remained dreams </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiscTabPanel;
