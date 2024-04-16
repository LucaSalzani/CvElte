<script>
  import Header from "./components/structural/Header.svelte";
  import Body from "./components/structural/Body.svelte";
  import LocaleSwitcher from "./components/sections/LocaleSwitcher.svelte";
  import { setupI18n, isLocaleLoaded, locale } from "./services/i18n";
  $: if (!$isLocaleLoaded) {
    setupI18n({ withLocale: "en" });
  }
</script>

<main>
  {#if $isLocaleLoaded}
    <LocaleSwitcher
      value={$locale}
      on:locale-changed={(e) => setupI18n({ withLocale: e.detail })}
    />
    <Header />
    <Body />
  {:else}
    <p>Loading...</p>
  {/if}
</main>

<style>
  main {
    width: 21cm;
    height: 29.5cm;
    padding: 2.3rem 3.75rem;
    margin: 0;
    display: flex;
    flex-direction: column;
    font-family: "Lato", sans-serif;
    font-weight: 300;
  }

  @media screen and (max-width: 620px) {
    main {
      padding: 0.5rem 0.8rem;
    }
  }
</style>
