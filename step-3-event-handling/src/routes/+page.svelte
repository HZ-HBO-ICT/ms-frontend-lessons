<script>
  import Appointment from '$lib/components/Appointment.svelte';
  import CustomerDetail from '$lib/components/customerDetail.svelte';
  import Clients from '$lib/components/Clients.svelte';
  let selectedCustomer = {};
  let timeslot = {};

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
        id: 1,
        name: 'Sissy',
        breed: '🐈',
      },
    },
    {
      timeslotId: 2,
      starttime: '09.15',
      duration: 15,
      appointment: {
        id: 2,
        name: 'Suzy',
        breed: '🐕',
      },
    },
    {
      timeslotId: 3,
      starttime: '09.30',
      duration: 15,
      appointment: {
        id: 3,
        name: 'Henk',
        breed: '🦜',
      },
    },
    {
      timeslotId: 4,
      starttime: '09.45',
      duration: 15,
      appointment: {
        id: 4,
        name: 'Greet',
        breed: '🐢',
      },
    },
    {
      timeslotId: 5,
      starttime: '10.00',
      duration: 15,
      appointment: {
        id: 5,
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
        id: 6,
        name: 'Mr Jansen',
        breed: '🐕',
      },
    },
    {
      timeslotId: 10,
      starttime: '11.15',
      duration: 15,
      appointment: {
        id: 7,
        name: 'Patty',
        breed: '🐕',
      },
    },
    {
      timeslotId: 11,
      starttime: '11.30',
      duration: 15,
      appointment: {
        id: 8,
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
        id: 9,
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
        id: 10,
        name: 'Gait',
        breed: '🐐',
      },
    },
    {
      timeslotId: 16,
      starttime: '12.45',
      duration: 15,
      appointment: {
        id: 11,
        name: 'Choco',
        breed: '🐇',
      },
    },
  ];

  /**
   * Function to find an client
   * @param clientID
   */
  const filteredClient = (clientID) => {
    let clientInformation;
    console.log('Searching for:', clientID);
    timeSlots.forEach((timeslot) => {
      // return timeslot.appointment;
      if (timeslot.appointment != undefined) {
        let clientsid = timeslot.appointment.id;
        if (clientsid == clientID) {
          clientInformation = timeslot.appointment;
        } else {
          //searching for woepie
        }
      }
    });
    return clientInformation;
  };

  /**
   * Function to handle an click event
   * @param event
   */
  const handleClick = (event) => {
    /**
     * The difficult part of this event is to find out which DOM element has caused
     * the event. We want to target the right element and read the right values.
     */
    let target = event.target;
    let parent = target.parentElement;
    if (!parent.classList.contains('appointment')) {
      let grandparent = parent.parentElement;
      selectedCustomer = filteredClient(grandparent.dataset.cardDetail);
    } else {
      selectedCustomer = filteredClient(parent.dataset.cardDetail);
    }
    console.log(selectedCustomer);
  };

  function showClientDetails(event) {
    console.log(event.detail.clientDetails);
    selectedCustomer = event.detail.clientDetails;
  }
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
        {#each timeSlots as timeslot}
          <Appointment on:mousedown={handleClick} {timeslot} />
        {/each}
      </div>
    </div>
    <CustomerDetail customer={selectedCustomer} />
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
      <Clients on:clientDetails={showClientDetails} clients={timeSlots} />
    </div>
  </section>
</div>

<style>
</style>
