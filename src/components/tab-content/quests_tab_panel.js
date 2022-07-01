const QuestsTabPanel = () => (
  <div
    class="tab-pane fade"
    role="tabpanel"
    id="quests"
    aria-labelledby="quests-tab"
  >
    <h3 class="pip-title">Quests</h3>
    <div class="pip-body">
      <ul class="options" role="tablist">
        <li
          class="active"
          data-bs-toggle="tab"
          data-bs-target="#quest-1"
          role="tab"
        >
          <a>Le Courier In Le Mojav</a>
        </li>
        <li data-bs-toggle="tab" data-bs-target="#quest-2" role="tab">
          <a>comign soon. 2022.</a>
        </li>
        <li class="disabled">
          <label>//Null</label>
        </li>
      </ul>
      <div class="tab-content">
        <div
          class="info tab-pane active fade-in show"
          id="quest-1"
          role="tabpanel"
          aria-labelledby="quest-1-tab"
        >
          <div class="post">
            <p>Who dat damn ghuy who shot me,,,, I ain't dead.... yet.... </p>
          </div>
        </div>

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

export default QuestsTabPanel;
