<template>
  <div>
    <div class="top-row">
      <div class="top part">
        <img :src="availableParts.heads[selectedHeadIndex].src" alt title="head" />
        <button class="prev-selector" @click="selectPreviousHead()">&#9668;</button>
        <button class="next-selector" @click="selectNextHead()">&#9658;</button>
      </div>
    </div>

    <div class="middle-row">
      <div class="left part">
        <img :src="availableParts.arms[selectedLeftArmIndex].src" alt title="left arm" />
        <button class="prev-selector" @click="selectPreviousLeftArm()">&#9650;</button>
        <button class="next-selector" @click="selectNextLeftArm()">&#9660;</button>
      </div>

      <div class="center part">
        <img :src="availableParts.torsos[selectedTorsoIndex].src" title="left arm" alt />
        <button class="prev-selector" @click="selectPreviousTorso()">&#9668;</button>
        <button class="next-selector" @click="selectNextTorso()">&#9658;</button>
      </div>

      <div class="right part">
        <img :src="availableParts.arms[selectedRightArmIndex].src" alt title="left arm" />
        <button class="prev-selector" @click="selectPreviousRightArm()">&#9650;</button>
        <button class="next-selector" @click="selectNextRightArm()">&#9660;</button>
      </div>
    </div>

    <div class="bottom-row">
      <div class="bottom part">
        <img :src="availableParts.bases[selectedBaseIndex].src" alt title="head" />
        <button class="prev-selector" @click="selectPreviousBase()">&#9668;</button>
        <button class="next-selector" @click="selectNextBase()">&#9658;</button>
      </div>
    </div>
  </div>
</template>

<script>
import availableParts from "../../data/parts";

export default {
  name: "RobotBuilder",
  data() {
    return {
      availableParts,
      selectedHeadIndex: 0,
      selectedLeftArmIndex: 0,
      selectedTorsoIndex: 0,
      selectedRightArmIndex: 0,
      selectedBaseIndex: 0
    };
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
    }
  }
};
</script>

<style scoped>
@import "RobotBuilder.css";
</style>