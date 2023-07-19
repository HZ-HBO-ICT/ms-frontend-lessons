<script>
    let client;
</script>

<li bind:this={clientDetails} on:click={displayClientDetails} class="inline-block p-2 hover:bg-violet-600 cursor-pointer">{client.appointment.name}</li>