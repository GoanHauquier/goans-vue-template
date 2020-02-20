<template>
<!-- HTML goes here -->
  <div class="container">
    <div class="col-12 text-center margin-60b margin-30t">
      <h1>Okay, this is epic</h1>
    </div>
    <div class="col-12 text-left margin-60b margin-30t">
      <h2>This template includes:</h2>
    </div>
    <div class="row">
      <div class="col-12 col-sm-3 text-center margin-45b">
      <a href="https://bootstrap-vue.js.org/" target="_blank" class="black"><h3>- Bootstrap Grid</h3></a>
      </div>
      <div class="col-12 col-sm-3 text-center margin-45b">
        <a href="https://github.com/vuejs/vue-router" target="_blank" class="black"><h3>- Vue Router</h3></a>
      </div>
      <div class="col-12 col-sm-3 text-center margin-45b">
        <a href="https://github.com/axios/axios" target="_blank" class="black"><h3>- Axios</h3></a>
      </div>
      <div class="col-12 col-sm-3 text-center margin-45b">
        <a href="https://sass-lang.com/" target="_blank" class="black"><h3>- Sass</h3></a>
      </div>
      <div class="col-12 text-center">
        <img src="../assets/img/logo.png" alt="vuelogo" class="scale-up">
      </div>
    </div>
    <hr>
    <div class="col-12 text-center margin-30t margin-30b">
      <p>Thank <strong>YOU</strong> for using my template!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // You can add meta data to your components like this:
  metaInfo: {
    title: "Goan's Vue Template",
    titleTemplate: '%s - Epic!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  }
}
</script>
