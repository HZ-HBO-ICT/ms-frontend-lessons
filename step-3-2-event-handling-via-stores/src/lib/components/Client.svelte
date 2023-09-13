<script>
  import { selectedCustomer } from '../../stores/selectedCustomerStore';
  export let client;

  function selectACustomer(client) {
    $selectedCustomer.id = client.id;
    $selectedCustomer.name = client.name;
    $selectedCustomer.breed = client.breed;
  }
</script>

<li
  on:mousedown={selectACustomer(client)}
  class="inline-block p-2 hover:bg-violet-600 cursor-pointer"
>
  {client.name}
</li>
