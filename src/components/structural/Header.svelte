<script>
  import { _ } from "../../services/i18n";
  export const name = "Luca Salzani";
</script>

<div id="header">
  <h1 id="my-name">{name}</h1>
  <div class="row">
    <div class="summary">
      {$_("header")}
    </div>
    <div class="profile">
      <img class="profile-image" src="profile.jpg" alt="Luca Profile" />
    </div>
  </div>
</div>

<style>
  #header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    margin-bottom: var(--vertical-space-between-sections);
  }

  #my-name {
    text-transform: uppercase;
    color: var(--accent-color);
    font-family: var(--accent-font);
    font-size: 3em;
    margin: 0;
  }

  .summary {
    max-width: 60%;
    margin-top: 5px;
    font-size: 1.05em;
    font-weight: 300;
    font-family: var(--accent-font);
    line-height: 1.5em;
    color: #000;
    text-align: left;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .profile-image {
    width: 3.5cm;
  }
</style>
