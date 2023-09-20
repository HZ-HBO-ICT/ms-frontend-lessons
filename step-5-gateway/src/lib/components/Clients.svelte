<script>
  async function getAllClients() {
    const res = await fetch(`http://localhost:3011/clients`);
    const values = await res.json();
    return values;
  }

  let clientsPromises = getAllClients();
</script>

<section class="flex flex-col lg:flex-row mt-5">
  <div class="basis-4/6 bg-slate-50 rounded-lg p-10 lg:mr-8">
    <ul>
      {#await clientsPromises}
        <li>...waiting</li>
      {:then clients}
        {#each clients as client}
          <li>{client}</li>
        {/each}
      {:catch error}
        <li>Error: {error.message}</li>
      {/await}
    </ul>
  </div>
</section>
