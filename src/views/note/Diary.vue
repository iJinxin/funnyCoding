<template>
  <div class="diary"></div>
</template>

<script>
import { $get } from '@/api/http';
import api from '@/api/api';

export default {
  name: 'Diary',
  data() {
    return {};
  },
  created() {
    $get(api.testExample).then((res) => {
      console.log(res);
    });
  },
};
</script>

<style scoped>

</style>
