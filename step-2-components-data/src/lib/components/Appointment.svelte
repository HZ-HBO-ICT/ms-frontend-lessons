<script>
  export let timeslot;
</script>

<div id="client-243">
  {#if timeslot.appointment === undefined}
    <ul class="flex flex-wrap justify-between bg-slate-100 rounded-lg">
      <li class="bg-slate-100 mr-2 p-2 rounded-l-lg">{timeslot.starttime}</li>
      <li class="bg-slate-100 mr-2 p-2">---</li>
    </ul>
  {:else}
    <ul class="flex flex-wrap justify-between bg-yellow-100 rounded-lg">
      <li class="bg-yellow-300 mr-2 p-2 rounded-l-lg">{timeslot.starttime}</li>
      <li class="mr-2 p-2">{timeslot.appointment.name}</li>
      <li class="mr-2 p-2">{timeslot.appointment.breed}</li>
    </ul>
  {/if}
</div>
