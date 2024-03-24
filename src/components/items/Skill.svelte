<script>
  import { _ } from "../../services/i18n";
  export let skill;
</script>

<div class="skill">{$_(skill)}</div>

<style>
  .skill {
    border: 1px solid var(--grey-light);
    width: fit-content;
    padding: 5px 4.5px;
    border-radius: 3px;
    margin: 5px;
    font-size: 0.97em;
    font-weight: 400;
  }
</style>
