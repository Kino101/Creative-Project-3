<template>
<div class="wrapper">
  <div class="colorKey">
    <p id='blue'><strong>Art:</strong> blue</p>
    <p id='red'><strong>Plush:</strong> red</p>
    <p id='green'><strong>Miscellaneous:</strong> greens</p>
  </div>
  <div class="itemGrid">
    <div v-for="item in items" :key="item.name">
      <div :class="item.type" class="oneItem">
        <img :src="item.image">
        <div class="info">
          <p>{{item.name}}</p>
          <p class='spacer' v-show='displayPrice'>${{item.price}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DisplayItems',
  props: {
    items: Array,
    displayPrice: Boolean,
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.colorKey {
  display: flex;
  width: 600px;
  justify-content: space-around;
  background-color: rgba(250, 250, 250, 0.4);
  border-radius: 10px;
}

#blue {
  color: #0fbcf9;
}

#red {
  color: #ff3f34;
}

#green {
  color: #42b983;
}

.itemGrid {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
}

.oneItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding: 10px;
  border-radius: 20px;
  margin-top: 20px;
}

.oneItem p {
  margin-bottom: 0px;
}

.oneItem img {
  width: 175px;
  border-radius: 10px;
}

.info {
  display: flex;
  justify-content: center;
  text-align: center;
}

.spacer {
  margin-left: 10px;
}

.Art {
  background-color: #0fbcf9;
}

.Plush {
  background-color: #ff3f34;
}

.Miscellaneous {
  background-color: #42b983;
}
</style>
