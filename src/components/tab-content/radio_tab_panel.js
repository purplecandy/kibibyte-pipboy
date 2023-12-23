import { sounds } from "../../utils";

const RadioTabPanel = () => {
  return (
    <div
      class="tab-pane fade"
      role="tabpanel"
      id="radio"
      aria-labelledby="tabpanel"
    >
      <h3 class="pip-title">Tapes</h3>
      <div class="pip-body">
        <ul class="options">
          <li>
            <input
              type="radio"
              id="audio-1"
              name="audio-tape"
              data-play-audio={sounds.audio_one}
            />
            <label for="audio-1">01_tape</label>
          </li>
          <li>
            <input
              type="radio"
              id="audio-2"
              name="audio-tape"
              data-play-audio={sounds.audio_two}
            />
            <label for="audio-2">02_tape</label>
          </li>
          <li>
            <input
              type="radio"
              id="audio-3"
              name="audio-tape"
              data-play-audio={sounds.audio_three}
            />
            <label for="audio-3">03_tape</label>
          </li>
          <li class="disabled">
            <label>//Null</label>
          </li>
          <li class="disabled">
            <label>//Null</label>
          </li>
        </ul>
        <div class="info">
          <div class="post"></div>
        </div>
      </div>
    </div>
  );
};

export default RadioTabPanel;
