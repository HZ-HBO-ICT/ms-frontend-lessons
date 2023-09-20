<script>
  export let timeslot;
  import { selectedCustomer } from '../../stores/selectedCustomerStore';
  
  function selectACustomer() {
    console.log('selected', timeslot);
    selectedCustomer.update(() => ({...timeslot.appointment}));
    // $selectedCustomer.id = timeslot.appointment.id;
    // $selectedCustomer.name = timeslot.appointment.name;
    // $selectedCustomer.breed = timeslot.appointment.breed;
  }
</script>

<div class="appointment cursor-pointer" id={timeslot.timeslotId}>
  {#if !timeslot.appointment}
    <ul class="flex flex-wrap justify-between bg-slate-100 rounded-lg">
      <li class="bg-slate-100 mr-2 p-2 rounded-l-lg">{timeslot.starttime}</li>
      <li class="bg-slate-100 mr-2 p-2">---</li>
    </ul>
  {:else}
    <ul
      on:mousedown={selectACustomer}
      class="flex flex-wrap justify-between bg-yellow-100 rounded-lg"
    >
      <li class="bg-yellow-300 mr-2 p-2 rounded-l-lg">{timeslot.starttime}</li>
      <li class="mr-2 p-2">{timeslot.appointment.name}</li>
      <li class="mr-2 p-2">{timeslot.appointment.breed}</li>
    </ul>
  {/if}
</div>
