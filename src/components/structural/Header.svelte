<script>
  export const name = "Luca Salzani";
  const summaryLines = [
    "Versatile and pragmatic full stack developer with focus on .NET backend technologies. Fast learner with experience in a wide range of industries. Enthusiastic about DevOps and Quality Assurance."
  ];
</script>

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

<div id="header">
  <h1 id="my-name">{name}</h1>
  <div class="row">
    <div class="summary">
      {#each summaryLines as line, i}
        <div class="summary-line-{i}">
          {@html line}
        </div>
      {/each}
    </div>
    <div class="profile">
      <img class="profile-image" src="profile.jpg" alt="Luca Profile Picture" />
    </div>
  </div>
</div>
