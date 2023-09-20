<script>
  import Appointment from '$lib/components/Appointment.svelte';
  import CustomerDetail from '$lib/components/customerDetail.svelte';
  import Client from '$lib/components/Client.svelte';
  import Clients from '$lib/components/Clients.svelte';

  // data is used to get the data from the server request. It is a reserved word in Svelte
  export let data;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="container w-full mx-auto">
  <section class="mt-10">
    <h2 class="text-6xl">
      Ap<span class="inline-block bg-pink-500 rounded-lg p-2">pointments</span>
    </h2>
  </section>
  <section class="flex flex-col lg:flex-row mt-5">
    <div class="basis-4/6 bg-slate-50 rounded-lg p-10 lg:mr-8">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {#each data.items.data as timeslot}
          <Appointment {timeslot} />
        {/each}
      </div>
    </div>
    <CustomerDetail />
  </section>
</div>
<div class="container w-full mx-auto mt-4">
  <section class="mt-4">
    <h2 class="text-4xl">
      Cl<span class="inline-block bg-emerald-200 rounded-lg p-2">ients</span>
    </h2>
  </section>
  <section class="flex flex-col lg:flex-row mt-5">
    <div class="basis-4/6 bg-slate-50 rounded-lg p-10 lg:mr-8">
      <ul>
        {#each data.items.data as timeslot}
          {#if timeslot.appointment != undefined}
            <Client client={timeslot.appointment} />
          {/if}
        {/each}
      </ul>
    </div>
  </section>
</div>
<div class="container w-full mx-auto mt-4">
  <section class="mt-4">
    <h2 class="text-4xl">Other clients</h2>
  </section>
  <Clients />
</div>

<style>
</style>
