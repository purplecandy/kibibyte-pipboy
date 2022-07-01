const RadioTabPanel = () => (
  <div
    class="tab-pane fade"
    role="tabpanel"
    id="radio"
    aria-labelledby="tabpanel"
  >
    <h3 class="pip-title">Radio</h3>
    <div class="pip-body">
      <ul class="options">
        <li>
          <input type="checkbox" id="check" checked />
          <label for="check">00_default</label>
        </li>
        <li class="disabled">
          <label>//Null</label>
        </li>
        <li class="disabled">
          <label>//Null</label>
        </li>
      </ul>
      <div class="info">
        <div class="post">No data.</div>
      </div>
    </div>
  </div>
);

export default RadioTabPanel;
