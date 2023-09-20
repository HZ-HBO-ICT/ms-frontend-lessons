<script>
      export let clients = [];
</script>

<ul class="">
  {#each clients as client}
    {#if client.appointment != undefined}
      <li class="inline-block p-2 hover:bg-violet-600 cursor-pointer">{client.appointment.name}</li>
    {/if}
  {/each}
</ul>
