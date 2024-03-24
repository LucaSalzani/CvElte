<script>
  import Skill from "../items/Skill.svelte";
  export let details;
</script>

<div id="skills-section">
  {#each details as skill}
    <Skill {skill} />
  {/each}
</div>

<style>
  #skills-section {
    display: flex;
    justify-content: var(--more-centered);
    flex-wrap: wrap;
    margin: 0 -5px;
  }
</style>
