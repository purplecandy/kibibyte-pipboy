const Tabs = () => (
  <div>
    <ul class="pip-foot" role="tablist">
      <li>
        <a
          class="active"
          href="#items"
          aria-current="page"
          data-bs-toggle="tab"
          data-bs-target="#items"
          role="tab"
          aria-selected="true"
        >
          Items
        </a>
      </li>
      <li>
        <a
          href="#stats"
          data-bs-toggle="tab"
          data-bs-target="#stats"
          role="tab"
        >
          Stats
        </a>
      </li>
      <li>
        <a
          href="#quests"
          data-bs-toggle="tab"
          data-bs-target="#quests"
          role="tab"
        >
          Quests
        </a>
      </li>
      <li>
        <a href="#misc" data-bs-toggle="tab" data-bs-target="#misc" role="tab">
          Misc
        </a>
      </li>
      <li>
        <a
          href="#radio"
          data-bs-toggle="tab"
          data-bs-target="#radio"
          role="tab"
        >
          Radio
        </a>
      </li>
    </ul>
  </div>
);

export default Tabs;
