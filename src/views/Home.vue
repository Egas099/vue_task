<template>
  <div class="home">
    <ItemsTable/>
  </div>
</template>

<script>
// @ is an alias to /src
import ItemsTable from '@/components/ItemsTable.vue';

export default {
  name: 'Home',
  components: {
    ItemsTable,
  },
};
</script>
