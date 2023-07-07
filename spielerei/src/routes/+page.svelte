<script>
  import Student from '$lib/components/Student.svelte';
  import Teacher from '$lib/components/Teacher.svelte';
  /**
   * This dataset will preferably be loaded in via serverside request to a db or an API call
   * or you can use stores.
   */
  const Burt = {
    name: 'Burt',
    fte: 0.6,
    expertise: ['JavaScript', 'Design Thinking'],
  };

  const Jan = {
    name: 'Jan',
    study: 'HBO-ICT',
    year: 3,
    courses: ['PBA', 'OOP'],
  };

  function showTeacherDetails(event) {
    console.log(event.detail.clickedDetails);
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="container w-full mx-auto">
  <section class="mt-10">
    <Student student={Jan} />
    <Teacher on:teacherDetails={showTeacherDetails} teacher={Burt} />
  </section>
</div>

<style>
</style>
