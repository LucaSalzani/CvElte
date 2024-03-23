<script>
  export let details;

  $: ({ qrCode, url, description, version } = details[0]);
</script>

<style>
  #contact-section {
    margin-top: 14px; /* align baseline with adjacent component text */
  }

  .qrcode img {
    max-width: 3cm;
  }

  .link {
    font-size: 0.9em;
    display: flex;
    justify-content: space-between;
  }
</style>

<div id="contact-section">
  <div class="bottom">{description}</div>
  <div class="qrcode">
    <img src={qrCode} alt="qrcode" />
  </div>
  <div class="link">
    <a href={url}>{url}</a>
    <span>{version}</span>
  </div>
</div>
