<template>
<div>
  <DisplayItems :items="items" :displayPrice="true" />
</div>
</template>

<script>
import DisplayItems from "../components/DisplayItems.vue"
export default {
  name: 'AllPosiible',
  components: {
    DisplayItems
  },
  computed: {
    items() {
      let uniqueItems = [];
      for (let i = 0; i < this.$root.$data.wonItems.length; i++) {
        let currentItem = this.$root.$data.wonItems[i];
        let index = uniqueItems.indexOf(currentItem);
        if (index == -1) {
          uniqueItems.push(currentItem);
        }
      }
      return uniqueItems;
    }
  },
}
</script>
