<template>
  <div class="wrapper">
    <div class="itemGrid">
      <div v-for="item in items" :key="item.name">
        <div class="item">
          <div class='image'>
            <img :src="item.image">
          </div>
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'GameDisplay',
  props: {
    items: Array
  },
}
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .itemGrid {
    margin-top: 20px;
    align-items: center;
    display: grid;
    grid-template-columns: auto auto;
    grid-row-gap: 20px;
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    background-color: #0fbcf9;
    padding-top: 20px;
    border-radius: 20px;
    font-size: 17px;
  }

  .item img {
    width: inherit;
    border-radius: 10px;
  }

  .image {
    display: block;
    width: inherit;
    height: 90%;
    overflow-y: hidden;
  }
</style>
