<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  export let teacher;

  function displayTeacherDetails(teacher) {
    dispatch('teacherDetails', {
      clickedDetails: teacher,
    });
  }
</script>

<div>
  <p>teacher:</p>
  <h2>{teacher.name} ({teacher.fte})</h2>
  <ul>
    {#each teacher.expertise as expertise}
      <li on:click={displayTeacherDetails(expertise)}>{expertise}</li>
    {/each}
  </ul>
</div>
