<template>
  <div v-if="availableParts" class="content">
    <div class="preview">
      <CollapsibleSection>
        <div class="preview-content">
          <div class="top-row">
            <img :src="selectedRobot.head.src" alt />
          </div>
          <div class="middle-row">
            <img :src="selectedRobot.leftArm.src" class="rotate-left" />
            <img :src="selectedRobot.torso.src" alt />
            <img :src="selectedRobot.rightArm.src" class="rotate-right" />
          </div>
          <div class="bottom-row">
            <img :src="selectedRobot.base.src" alt />
          </div>
        </div>
      </CollapsibleSection>
    </div>
    <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
    <div class="top-row">
      <!-- <div class="top part" :style="[headBorderStyle, moreStyle]"> -->
      <!-- <div :class="[saleBorderClass, 'top', 'part']">
        <div class="robot-name">
          {{ selectedRobot.head.title}}
          <span v-if="selectedRobot.head.onSale" class="sale">Sale</span>
        </div>
        
      </div>-->
      <PartSelector
        :parts="availableParts.heads"
        position="top"
        @partSelected="part => selectedRobot.head=part"
      />
    </div>

    <div class="middle-row">
      <PartSelector
        :parts="availableParts.arms"
        position="left"
        @partSelected="part => selectedRobot.leftArm=part"
      />
      <PartSelector
        :parts="availableParts.torsos"
        position="center"
        @partSelected="part => selectedRobot.torso=part"
      />
      <PartSelector
        :parts="availableParts.arms"
        position="right"
        @partSelected="part => selectedRobot.rightArm=part"
      />
    </div>

    <div class="bottom-row">
      <PartSelector
        :parts="availableParts.bases"
        position="bottom"
        @partSelected="part => selectedRobot.base=part"
      />
    </div>
  </div>
</template>

<script>
// import availableParts from "../../data/parts";
import createdHookMixin from "./created-hook-mixin";
import PartSelector from "./PartSelector.vue";
import CollapsibleSection from "../shared/CollapsibleSection.vue";

export default {
  name: "RobotBuilder",
  beforeRouteLeave(to, from, next) {
    if (this.addedToCart) {
      next(true);
    } else {
      const response = confirm(
        "You have not added your robot to your card, are you sure you want to leave?"
      );
      next(response);
    }
  },
  components: { PartSelector, CollapsibleSection },
  data() {
    return {
      cart: [],
      // availableParts,
      selectedRobot: {
        head: {},
        leftArm: {},
        torso: {},
        rightArm: {},
        base: {},
        addedToCart: false
      }
    };
  },

  mixins: [createdHookMixin],
  created() {
    this.$store.dispatch("robots/getParts");
  },
  computed: {
    headBorderStyle() {
      return {
        border: this.selectedRobot.head.onSale
          ? "3px solid red"
          : "3px solid #aaa"
      };
    },

    saleBorderClass() {
      return this.selectedRobot.head.onSale ? "sale-border" : "";
    },

    availableParts() {
      return this.$store.state.robots.parts;
    }
  },

  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost =
        robot.head.cost +
        robot.leftArm.cost +
        robot.torso.cost +
        robot.rightArm.cost +
        robot.base.cost;

      // storing data to cart thn dispatch data 
      // from the store thn go to the CART router(then comes from axios return)
      this.$store
        .dispatch("robots/addRobotToCart", Object.assign({}, robot, { cost }))
        .then(() => this.$router.push("/cart"));
      // as we got the robot object, so adding the cost variable to the robot obj
      // this following way
      // this.cart.push();
      this.addedToCart = true;
      console.log(this.cart);
    }
  }
};
</script>

<style lang='scss' scoped>
@import "RobotBuilder.scss";
</style>