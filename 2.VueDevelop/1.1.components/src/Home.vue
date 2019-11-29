<template>
  <div>
    <app-server-status v-for="server in 5"></app-server-status>
  </div>
</template>

<script>
  import ServerStatus from './ServerStatus.vue';
  export default {
    components: { //registar localmente o componente
      'app-server-status': ServerStatus
    }
  }
</script>

