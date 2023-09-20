<script>
  import { selectedCustomer } from '../../stores/selectedCustomerStore';
</script>

<div id="details" class="basis-2/6 bg-teal-100 rounded-lg mt-10 lg:mt-0 p-10">
  <h2>Details</h2>
  <p>{$selectedCustomer.id}</p>
  <p>{$selectedCustomer.name}</p>
  <p>{$selectedCustomer.breed}</p>
</div>
