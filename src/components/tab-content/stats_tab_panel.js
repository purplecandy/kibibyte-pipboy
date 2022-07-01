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
      <ul class="side-menu" role="tablist">
        <li
          class="active"
          data-bs-toggle="tab"
          data-bs-target="#cnd"
          role="tab"
        >
          <a>CND</a>
        </li>
        <li data-bs-toggle="tab" data-bs-target="#rad" role="tab">
          <a>RAD</a>
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
          <a href="#">SLP</a>
        </li>
      </ul>
      <div class="tab-content">
        <div
          class="tab-pane fade in active show"
          show
          id="cnd"
          role="tabpanel"
          aria-labelledby="cnd-tab"
        >
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
        <div
          class="tab-pane fade"
          id="rad"
          role="tabpanel"
          aria-labelledby="rad-tab"
        >
          <div class="stats-page">
            <h4>Radiation</h4>
            <ul>
              <li>No data.</li>
            </ul>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="eff"
          role="tabpanel"
          aria-labelledby="eff-tab"
        >
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
