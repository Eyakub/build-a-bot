<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>{{ part.description }}</div>
  </div>
</template>

<script>
import parts from '../../data/parts';
export default {
	name: "PartInfo",
	props: {
		partType: {type: String},
		id: {
			type: [Number, String],
			validator(value){
				return Number.isInteger(Number(value));
			}
		}
	},
  computed: {
		part() {
				const { partType, id } = this; // as we get this as props
				// const { partType, id } = this.$route.params.partType;
				// +id means type cast the id variable
				return parts[partType].find(part => part.id === +id);
		}
  },
};
</script>
