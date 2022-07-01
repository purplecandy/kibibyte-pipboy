const ItemsTabPanel = () => (
  <div
    class="tab-pane fade-in show active"
    role="tabpanel"
    id="items"
    aria-labelledby="items-tab"
  >
    <h3 class="pip-title">Items</h3>
    <ul class="pip-head">
      <li>
        <b>Wg</b> 34/125
      </li>
      <li>
        <b>HP</b> 89/110
      </li>
      <li>
        <span class="fade-a">
          <b>DT</b> 21
        </span>
        <span class="fade-b">
          <b>DR</b> 11
        </span>
      </li>
      <li>
        <b>Caps</b> 1721
      </li>
    </ul>
    <div class="pip-body">
      <ul class="options">
        <li>
          <input type="radio" id="radio1" name="radio" />
          <label for="radio1">Brass Knuckles</label>
        </li>
        <li>
          <input type="radio" checked="checked" id="radio2" name="radio" />
          <label for="radio2">Hunting Rifle</label>
        </li>
        <li>
          <input type="radio" id="radio3" name="radio" />
          <label for="radio3">Long Fuse Dynamite (11)</label>
        </li>
        <li>
          <input type="radio" id="radio4" name="radio" />
          <label for="radio4">Plasma Pistol</label>
        </li>
      </ul>
      <div class="info">
        <div class="right-options">
          <a href="#" class="disabled">
            Maintain
          </a>
          <a href="#">Mod</a>
        </div>
        <div class="info-body">
          <ul class="info-table">
            <li class="vboy-wrap">
              <div class="item-icon">
                <span class="icon">
                  <img
                    class="filter"
                    src="https://cybersandbox.ca/resources/556mm_round_icon.png"
                  />
                </span>
                0
              </div>
              <div class="vboy filter"></div>
            </li>
            <li>
              <b>STR</b> 6
            </li>
            <li class="clear">
              <span class="fade-a">
                <b>DAM</b> 52
              </span>
              <span class="fade-b">
                <b>DPS</b>
                49.3
              </span>
            </li>
            <li>
              <b>WG</b> 6.00
            </li>
            <li>
              <b>VAL</b> 2528
            </li>
            <li>
              <b>CND</b>{" "}
              <span class="condition">
                <span class="fill" style="width: 83%;"></span>
              </span>
            </li>
            <li class="span-2">.308 round (5/72)</li>
          </ul>
          <p class="extra">
            <b>MODS</b> Hunting Rifle Scope
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ItemsTabPanel;
