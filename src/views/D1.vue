<template>
  <div class='d1'>
    <h1>d1</h1>
    <div>
      <div id="force">
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
// import { Getter, Action} from 'vuex-class'
@Component({})
export default class D1 extends Vue {
  private strArr = ['apple', 'orange', 'banana']
  private mounted() {
    console.log(this, '----------------')
  }
}
</script>

<style lang='scss' scoped>
.d1{

}
</style>