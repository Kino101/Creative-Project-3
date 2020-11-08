<template>
<div class="wrapper">
  <div id='overlay' v-show='correct' @click="correct = false">
    <div class='rewardPopUp' :class="reward.type">
      <div width='300px'>
        <h4>Success!</h4>
        <img :src="reward.image" width="250px">
        <p>{{reward.name}}</p>
      </div>
    </div>
  </div>
  <h3>Enter your price here</h3>
  <div class="userGuess">
    <form v-on:submit.prevent='comparePrice'>
      <input type='text' v-model='guessedPrice'>
      <button type='submit'>Guess</button>
    </form>
    <p>Please enter a whole number</p>
  </div>
  <GameDisplay :items="fourItems" :key="refreshKey" />
  <div class="instructions">
    <h3>How to play:</h3>
    <p>The goal of the game is to win items by guessing the total combined price of the four given items.
      You don't need to guess the exact price, insted you have to guess within 10 dollors of the asking price.
      However, you must not go over the asking price because who wants to pay more at a garage sale.
      If you guess within 10 dollars you will be given a reward chosen randomly from the four items shown.
    </p>
  </div>
  <h4>Try To Collect Them All!</h4>
  <p class="priceRules"><strong>Pricing Rules:</strong></p>
  <ul>
    <li><strong>Art:</strong> $10 - $20</li>
    <li><strong>Plush:</strong> $5 - $20</li>
    <li><strong>Misilaneous:</strong> $5 - $10</li>
  </ul>
</div>
</template>

<script>
let randomIndex = function(array, usedNumbers) {
  let index = Math.floor(Math.random() * array.length)
  for (let i = 0; i < usedNumbers.length; i++) {
    if (index === usedNumbers[i]) {
      return randomIndex(array, usedNumbers);
    }
  }
  return index;
}
// @ is an alias to /src
import GameDisplay from "../components/GameDisplay.vue"
export default {
  name: 'Home',
  components: {
    GameDisplay,
  },
  data() {
    return {
      guessedPrice: '',
      reward: {},
      correct: false,
      refreshKey: 0,
    }
  },
  computed: {
    fourItems() {
      this.refreshKey;
      let fourItems = this.randomFourItems();
      return fourItems;
    },

    totalPrice() {
      let totalPrice = 0;
      for (let i = 0; i < 4; i++) {
        totalPrice += this.fourItems[i].price;
      }
      return totalPrice;
    },
  },
  methods: {
    randomFourItems() {
      let fourItems = [];
      let items = this.$root.$data.items;
      let usedIndexes = [];
      for (let i = 0; i < 4; i++) {
        let index = randomIndex(items, usedIndexes);
        fourItems.push(items[index]);
        usedIndexes.push(index);
      }
      return fourItems;
    },
    comparePrice() {
      if (this.totalPrice - parseInt(this.guessedPrice, 10) <= 10 && this.totalPrice - parseInt(this.guessedPrice, 10) >= 0) {
        this.reward = this.fourItems[randomIndex(this.fourItems, [])];
        this.$root.$data.wonItems.push(this.reward);
        this.correct = true;
      }
      this.refreshKey += 1;
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  background-color: #ff3f34;
  margin-left: 10px;
  font-family: 'Handlee', cursive;
  font-weight: bold;
  font-size: 12px;
  border-radius: 5px;
  border-color:black;
}

.userGuess {
  margin-bottom: 30px;
}

.instructions {
  width: 80%;
  max-width: 600px;
  margin-top: 50px;
}

.instructions p {
  text-align: left;
}

.priceRules {
  margin-bottom: 10px;
}

ul {
  text-align: left;
  margin-top: 0px;
}

#overlay {
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(250, 250, 250, 0.4);
  cursor: pointer;
}

.rewardPopUp {
  display: block;
  padding: 20px;
  text-align: center;
  background-color: #FAC593;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
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
