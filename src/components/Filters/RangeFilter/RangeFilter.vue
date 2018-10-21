<template>
  <section class="range-filter">
    <h3 class="range-filter__title">
      <slot name="title"></slot>
    </h3>
    <VueSlider
      v-model="rangeSettings.value"
      @input="setRangeSliderValue({ property: statePropertyToSet, value: $event })"
      :min="min"
      :max="max"
      :formatter="rangeSettings.formatter" />
  </section>
</template>

<script>
import VueSlider from 'vue-slider-component';
import { mapMutations } from 'vuex';

export default {
  name: 'RangeFilter',
  components: {
    VueSlider
  },
  props: {
    min: {
      type: Number,
      required: false
    },
    max: {
      type: Number,
      required: true
    },
    measure: {
      type: String,
      required: true
    },
    statePropertyToSet: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      rangeSettings: {
        value: this.min ? [ this.min, this.max ] : this.max,
        formatter: `{value} ${this.measure}`
      }
    }
  },
  methods: {
    ...mapMutations([
      'setRangeSliderValue'
    ])
  }
}
</script>

<style scoped lang="scss">
.range-filter {
  &__title {
    margin-top: 0;
    margin-bottom: 40px;
  }
}
</style>
