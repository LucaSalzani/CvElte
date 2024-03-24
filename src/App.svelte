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
