<template>
  <div class="part" :class="position">
    <img @click='showPartInfo()' :src="selectedPart.src" title="arm" />
    <button @click="selectPreviousPart()" class="prev-selector"></button>
    <button @click="selectNextPart()" class="next-selector"></button>
    <span class="sale" v-show="selectedPart.onSale">Sale!</span>
  </div>
</template>

<script>

export default {
  props: {
    parts: {
      type: Array,
      required: true,
    },
    position: {
      type: String,
      required: true,
      validator: function(value){
        return ['left', 'right', 'top', 'bottom', 'center'].includes(value);
      }
    }
  },
  data() {
    return { selectedPartIndex: 0 };
  },

  computed: {
    selectedPart() {
      return this.parts[this.selectedPartIndex];
    }
  },

  created(){
    this.emitSelectedPart();
  },

  updated(){
    this.emitSelectedPart();
  },

  methods: {
    emitSelectedPart(){
      this.$emit('partSelected', this.selectedPart);
    },
    getPreviousValidIndex(index, length) {
      const deprecatedIndex = index - 1;
      return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
    },
    getNextValidIndex(index, length) {
      const incrementedIndex = index + 1;
      return incrementedIndex > length - 1 ? 0 : incrementedIndex;
    },
    selectPreviousPart() {
      this.selectedPartIndex = this.getPreviousValidIndex(
        this.selectedPartIndex,
        this.parts.length
      );
      this.emitSelectedPart();
    },
    selectNextPart() {
      this.selectedPartIndex = this.getNextValidIndex(
        this.selectedPartIndex,
        this.parts.length
      );
      this.emitSelectedPart();
    },
    showPartInfo(){
      // as we enjected our VUE app with router in Main.JS file
      // we can get the router url by this
      this.$router.push('/parts');
    },
  }
};
</script>


<style lang='scss' scoped>
@import "RobotBuilder.scss";
</style>