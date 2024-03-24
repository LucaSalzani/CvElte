<script>
    import { createEventDispatcher } from 'svelte';
    export let value = 'en';
    const dispatch = createEventDispatcher();
    function handleLocaleChange(event) {
        event.preventDefault();
        dispatch('locale-changed', event.target.value);
    }
</script>
<style>
@media print
{    
    .locale-selector
    {
        display: none;
    }
}
</style>
<div class="locale-selector">
    <div class="select">
        <select value={value} on:change={handleLocaleChange}>
            <option value="en">English</option>
            <option value="de">Deutsch</option>
        </select>
    </div>
</div>