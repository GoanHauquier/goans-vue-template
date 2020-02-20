<template>
<div class="container">
  <div class="col-12 text-center margin-30t margin-30b">
      <h1>Neat!</h1>
    <p>It seems to work!</p>
    <div class="col-12 text-center margin-30t margin-30b">
      <img src="../assets/img/borat.jpg" alt="greatsucces" class="scale-up">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Test',
  metaInfo: {
    title: "Goan's Test Page",
    titleTemplate: '%s - Neat!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  }
}
</script>
