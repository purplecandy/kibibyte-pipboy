const StatsTabPanel = () => (
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
      <ul class="side-menu">
        <li class="active">
          <a href="#cnd" data-toggle="tab">
            CND
          </a>
        </li>
        <li>
          <a href="#rad" data-toggle="tab">
            RAD
          </a>
        </li>
        <li>
          <a href="#eff" data-toggle="tab">
            EFF
          </a>
        </li>
        <li class="disabled">
          <a href="#">H20</a>
        </li>
        <li class="disabled">
          <a href="#">FOD</a>
        </li>
        <li class="disabled">
          <a href="#">SLP</a>
        </li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane fade in active" id="cnd">
          <div class="stats-page">
            <h4>Condition</h4>

            <div class="right-options">
              <a href="#">(4) Stimpak</a>
              <a href="#" class="disabled">
                (0) Doctor's Bag
              </a>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="rad">
          <div class="stats-page">
            <h4>Radiation</h4>
            <ul>
              <li>No data.</li>
            </ul>
          </div>
        </div>
        <div class="tab-pane fade" id="eff">
          <div class="stats-page">
            <h4>Effects</h4>
            <ul>
              <li>No data.</li>
              <li>No data.</li>
              <li>No data.</li>
              <li>No data.</li>
              <li>No data.</li>
              <li>No data.</li>
              <li>No data.</li>
              <li>No data.</li>
              <li>No data.</li>
              <li>No data.</li>
              <li>No data.</li>
              <li>No data.</li>
              <li>No data.</li>
              <li>No data.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StatsTabPanel;
