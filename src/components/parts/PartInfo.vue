<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>{{ part.description }}</div>
  </div>
</template>

<script>
// import parts from "../../data/parts";
import getPartsMixin from './get-parts-mixin';

export default {
  name: "PartInfo",
  mixins: [getPartsMixin],
  props: {
    partType: { type: String },
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      }
    }
  },
  computed: {
    part() {
      const { partType, id } = this; // as we get this as props
      // const { partType, id } = this.$route.params.partType;
      // +id means type cast the id variable
      return this.parts[partType].find(part => part.id === +id);
    }
  }
};
</script>
