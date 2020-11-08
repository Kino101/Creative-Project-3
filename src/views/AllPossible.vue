<template>
  <div>
    <DisplayItems :items="items" :displayPrice='false'/>
  </div>
</template>

<script>
import DisplayItems from "../components/DisplayItems.vue"
export default {
  name: 'AllPosiible',
  components: {
    DisplayItems
  },
  // data() {
  //   return {
  //     searchText: '',
  //   }
  // },
  computed: {
    items() {
      return this.$root.$data.items;
    }
  },
}
</script>
