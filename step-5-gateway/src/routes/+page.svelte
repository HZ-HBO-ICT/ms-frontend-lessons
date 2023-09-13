<script>
  import Appointment from '$lib/components/Appointment.svelte';
  import CustomerDetail from '$lib/components/customerDetail.svelte';
  import Clients from '$lib/components/Clients.svelte';
  let selectedCustomer = {};
  
  // data is used to get the data from the server request. It is a reserved word in Svelte
  export let data;

  /**
   * Function to find an client
   * @param clientID
   */
  const filteredClient = (clientID) => {
    let clientInformation;
    console.log('Searching for:', clientID);
    data.items.data.forEach((timeslot) => {
      // return timeslot.appointment;
      if (timeslot.appointment != null) {
        let clientsid = timeslot.appointment.id;
        if (clientsid == clientID) {
          clientInformation = timeslot.appointment;
        } else {
          //searching for woepie
          clientInformation = "not found";
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
        {#each data.items.data as timeslot}
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
      <Clients on:clientDetails={showClientDetails} clients={data.items.data} />
    </div>
  </section>
</div>

<style>
</style>
