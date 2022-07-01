const QuestsTabPanel = () => (
  <div
    class="tab-pane fade"
    role="tabpanel"
    id="quests"
    aria-labelledby="quests-tab"
  >
    <h3 class="pip-title">Quests</h3>
    <div class="pip-body">
      <ul class="options">
        <li class="active">
          <a href="#quest-1" data-toggle="tab">
            Le Courier In Le Mojav
          </a>
        </li>
        <li>
          <a href="#quest-2" data-toggle="tab">
            comign soon. 2022.
          </a>
        </li>
        <li class="disabled">
          <label>//Null</label>
        </li>
      </ul>
      <div class="tab-content">
        <div class="info tab-pane active fade in" id="quest-1">
          <div class="post">
            <p>Who dat damn ghuy who shot me,,,, I ain't dead.... yet.... </p>
          </div>
        </div>

        <div class="info tab-pane fade" id="quest-2">
          <div class="post">
            <p>Fallput: Battle Royale</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default QuestsTabPanel;
