<script>
  import { _ } from "../../services/i18n";
  import Contact from "../sections/Contact.svelte";
  import Skills from "../sections/Skills.svelte";
  import FullDetails from "../sections/FullDetails.svelte";
  import SimpleDetails from "../sections/SimpleDetails.svelte";
  import AboutCv from "../sections/AboutCv.svelte";
  export let label;
  export let details;
  export let type;
</script>

<div class="section">
  <h2 class="section-label">{$_(label)}</h2>
  <hr class="section-underline" />
  {#if type === "simple-details"}
    <SimpleDetails {details} />
  {:else if type === "full-details"}
    <FullDetails {details} />
  {:else if type === "skills"}
    <Skills {details} />
  {:else if type === "contact"}
    <Contact {details} />
  {:else if type === "aboutcv"}
    <AboutCv {details} />
  {/if}
</div>
