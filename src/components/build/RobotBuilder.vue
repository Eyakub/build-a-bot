<template>
  <div class="content">
    <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
    <div class="top-row">
      <div class="top part">
        <div class="robot-name">
          {{ selectedRobot.head.title}}
          <span v-if="selectedRobot.head.onSale" class="sale">Sale</span>
        </div>
        <img :src="selectedRobot.head.src" alt title="head" />
        <button class="prev-selector" @click="selectPreviousHead()">&#9668;</button>
        <button class="next-selector" @click="selectNextHead()">&#9658;</button>
      </div>
    </div>

    <div class="middle-row">
      <div class="left part">
        <img :src="selectedRobot.leftArm.src" alt title="left arm" />
        <button class="prev-selector" @click="selectPreviousLeftArm()">&#9650;</button>
        <button class="next-selector" @click="selectNextLeftArm()">&#9660;</button>
      </div>

      <div class="center part">
        <img :src="selectedRobot.torso.src" title="left arm" alt />
        <button class="prev-selector" @click="selectPreviousTorso()">&#9668;</button>
        <button class="next-selector" @click="selectNextTorso()">&#9658;</button>
      </div>

      <div class="right part">
        <img :src="selectedRobot.rightArm.src" alt title="left arm" />
        <button class="prev-selector" @click="selectPreviousRightArm()">&#9650;</button>
        <button class="next-selector" @click="selectNextRightArm()">&#9660;</button>
      </div>
    </div>

    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.base.src" alt title="head" />
        <button class="prev-selector" @click="selectPreviousBase()">&#9668;</button>
        <button class="next-selector" @click="selectNextBase()">&#9658;</button>
      </div>
    </div>
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(robot, index) in cart' :key='index'>
            <td>{{robot.head.title}}</td>
            <td class="cost">{{ robot.cost }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import availableParts from "../../data/parts";

export default {
  name: "RobotBuilder",
  data() {
    return {
      cart: [],
      availableParts,
      selectedHeadIndex: 0,
      selectedLeftArmIndex: 0,
      selectedTorsoIndex: 0,
      selectedRightArmIndex: 0,
      selectedBaseIndex: 0
    };
  },

  computed: {
    selectedRobot() {
      return {
        head: availableParts.heads[this.selectedHeadIndex],
        leftArm: availableParts.arms[this.selectedLeftArmIndex],
        torso: availableParts.torsos[this.selectedTorsoIndex],
        rightArm: availableParts.arms[this.selectedRightArmIndex],
        base: availableParts.bases[this.selectedBaseIndex]
      };
    }
  },

  methods: {
    getPreviousValidIndex(index, length) {
      const deprecatedIndex = index - 1;
      return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
    },
    getNextValidIndex(index, length) {
      const incrementedIndex = index + 1;
      return incrementedIndex > length - 1 ? 0 : incrementedIndex;
    },

    // HEAD
    selectNextHead() {
      this.selectedHeadIndex = this.getNextValidIndex(
        this.selectedHeadIndex,
        availableParts.heads.length
      );
    },
    selectPreviousHead() {
      this.selectedHeadIndex = this.getPreviousValidIndex(
        this.selectedHeadIndex,
        availableParts.heads.length
      );
    },

    // RIGHT ARM
    selectNextRightArm() {
      this.selectedRightArmIndex = this.getNextValidIndex(
        this.selectedRightArmIndex,
        availableParts.arms.length
      );
    },
    selectPreviousRightArm() {
      this.selectedRightArmIndex = this.getPreviousValidIndex(
        this.selectedRightArmIndex,
        availableParts.arms.length
      );
    },

    // LEFT ARM
    selectNextLeftArm() {
      this.selectedLeftArmIndex = this.getNextValidIndex(
        this.selectedLeftArmIndex,
        availableParts.arms.length
      );
    },
    selectPreviousLeftArm() {
      this.selectedLeftArmIndex = this.getPreviousValidIndex(
        this.selectedLeftArmIndex,
        availableParts.arms.length
      );
    },

    // TORSO
    selectNextTorso() {
      this.selectedTorsoIndex = this.getNextValidIndex(
        this.selectedTorsoIndex,
        availableParts.torsos.length
      );
    },
    selectPreviousTorso() {
      this.selectedTorsoIndex = this.getPreviousValidIndex(
        this.selectedTorsoIndex,
        availableParts.torsos.length
      );
    },

    // BASE
    selectNextBase() {
      this.selectedBaseIndex = this.getNextValidIndex(
        this.selectedBaseIndex,
        availableParts.bases.length
      );
    },
    selectPreviousBase() {
      this.selectedBaseIndex = this.getPreviousValidIndex(
        this.selectedBaseIndex,
        availableParts.bases.length
      );
    },

    addToCart() {
      const robot = this.selectedRobot;
      const cost =
        robot.head.cost +
        robot.leftArm.cost +
        robot.torso.cost +
        robot.rightArm.cost +
        robot.base.cost;
      
      // as we got the robot object, so adding the cost variable to the robot obj
      // this following way
      this.cart.push(Object.assign({}, robot, { cost }))
      console.log(this.cart)
    }
  }
};
</script>

<style scoped>
@import "RobotBuilder.css";
</style>