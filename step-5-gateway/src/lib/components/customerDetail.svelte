<script>
  export let customer;
</script>

<div id="details" class="basis-2/6 bg-teal-100 rounded-lg mt-10 lg:mt-0 p-10">
  <h2>Details</h2>
  {#if Object.keys(customer).length == 0 || customer == 'not found'}
    <p>please select a customer</p>
  {:else}
    <p>{customer.id}</p>
    <p>{customer.name}</p>
    <p>{customer.breed}</p>
  {/if}
</div>
