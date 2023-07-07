<script>
  /**
   * This dataset will preferably be loaded in via serverside request to a db or an API call
   * or you can use stores.
   */
  const timeSlots = [
    {
      timeslotId: 1,
      starttime: '09.00',
      duration: 15,
      appointment: {
        name: 'Sissy',
        breed: '🐈',
      },
    },
    {
      timeslotId: 2,
      starttime: '09.15',
      duration: 15,
      appointment: {
        name: 'Suzy',
        breed: '🐕',
      },
    },
    {
      timeslotId: 3,
      starttime: '09.30',
      duration: 15,
      appointment: {
        name: 'Henk',
        breed: '🦜',
      },
    },
    {
      timeslotId: 4,
      starttime: '09.45',
      duration: 15,
      appointment: {
        name: 'Grete',
        breed: '🐢',
      },
    },
    {
      timeslotId: 5,
      starttime: '10.00',
      duration: 15,
      appointment: {
        name: 'Victor',
        breed: '🐈',
      },
    },
    {
      timeslotId: 6,
      starttime: '10.15',
      duration: 15,
      appointment: undefined,
    },
    {
      timeslotId: 7,
      starttime: '10.30',
      duration: 15,
      appointment: undefined,
    },
    {
      timeslotId: 8,
      starttime: '10.45',
      duration: 15,
      appointment: undefined,
    },
    {
      timeslotId: 9,
      starttime: '11.00',
      duration: 15,
      appointment: {
        name: 'Mr Jansen',
        breed: '🐕',
      },
    },
    {
      timeslotId: 10,
      starttime: '11.15',
      duration: 15,
      appointment: {
        name: 'Patty',
        breed: '🐕',
      },
    },
    {
      timeslotId: 11,
      starttime: '11.30',
      duration: 15,
      appointment: {
        name: 'Joris',
        breed: '🐍',
      },
    },
    {
      timeslotId: 12,
      starttime: '11.45',
      duration: 15,
      appointment: undefined,
    },
    {
      timeslotId: 13,
      starttime: '12.00',
      duration: 15,
      appointment: {
        name: 'Joep',
        breed: '🐇',
      },
    },
    {
      timeslotId: 14,
      starttime: '12.15',
      duration: 15,
      appointment: undefined,
    },
    {
      timeslotId: 15,
      starttime: '12.30',
      duration: 15,
      appointment: {
        name: 'Gait',
        breed: '🐐',
      },
    },
    {
      timeslotId: 16,
      starttime: '12.45',
      duration: 15,
      appointment: {
        name: 'Choco',
        breed: '🐇',
      },
    },
  ];
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="container w-full mx-auto">
  <section class="mt-10">
    <h2 class="text-6xl">
      Ap<span class="inline-block bg-lime-400 rounded-lg p-2"
        >pointments</span
      >
    </h2>
  </section>
  <section class="flex flex-col lg:flex-row mt-5">
    <div class="basis-4/6 bg-emerald-200 rounded-lg p-10 lg:mr-8">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {#each timeSlots as timeslot}
          {#if timeslot.appointment === undefined}
            <ul class="flex flex-wrap justify-between bg-slate-200 rounded-lg">
              <li class="bg-slate-300 mr-2 p-2 rounded-l-lg">
                {timeslot.starttime}
              </li>
              <li class="mr-2 p-2">---</li>
            </ul>
          {:else}
            <ul class="flex flex-wrap justify-between bg-amber-200 rounded-lg">
              <li class="bg-amber-700 mr-2 p-2 rounded-l-lg">
                {timeslot.starttime}
              </li>
              <li class="mr-2 p-2">{timeslot.appointment.name}</li>
              <li class="mr-2 p-2">{timeslot.appointment.breed}</li>
            </ul>
          {/if}
        {/each}
      </div>
    </div>
    <div id="details" class="basis-2/6 bg-teal-100 rounded-lg p-10 sm:mt-4 lg:mt-0">
      <h2>Details</h2>
      <div>Click on any item for a detailled view</div>
    </div>
  </section>
</div>

<style>
</style>
