<script>
  import { createEventDispatcher } from 'svelte';
  export let clients = [];
  
  const dispatch = createEventDispatcher();

  function displayClientDetails(client) {
    dispatch('clientDetails', {
      clientDetails: client,
    });
  }
</script>

<div>
  <ul class="">
    {#each clients as client}
      {#if client.appointment != undefined}
        <li on:click={displayClientDetails(client.appointment)} class="inline-block p-2 hover:bg-violet-600 cursor-pointer">{client.appointment.name}</li>
      {/if}
    {/each}
  </ul>
</div>
