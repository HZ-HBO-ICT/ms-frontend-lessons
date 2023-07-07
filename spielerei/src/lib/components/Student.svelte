<script>
  export let student;

  function handleClick(event) {
    console.log(event.target);
  }
</script>

<div>
  <div on:mousedown={handleClick}>
    <p>Student:</p>
    <h2>{student.name} ({student.study})</h2>
    <ul>
      {#each student.courses as course}
        <li>{course}</li>
      {/each}
    </ul>
  </div>
</div>
