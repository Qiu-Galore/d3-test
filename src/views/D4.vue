<template>
  <div class='d4'>
    <h1>d4</h1>
    <div id='svg'></div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
// import { Getter, Action} from 'vuex-class'
@Component({})
export default class D4 extends Vue {
  // private width: number = 960
  // private height: number = 500
  // private mounted() {
  //   this.drawChart()
  // }
  // private async drawChart() {
  //   const d3 = this.$d3
  //   const svg = d3.select('#svg')
  //     .append('svg')
  //     .attrAll({
  //       class: 'cirrusGraph',
  //       width: this.width,
  //       height: this.height
  //     })
  //   const vis = svg.append('g').attr('transform', `translate(${this.width / 2}, ${this.height / 2})`)
  //   const layout = d3.layout.cloud()
  //     .size([this.width, this.height])
  //     .overflow(true)
  //     .padding(1)
  //     .rotate((d: any) => ~~(Math.random() * 2) * 90)
  //     .spiral('archimedean')
  //     .font('"Palatino Linotype", "Book Antiqua", Palatino, serif')
  //     .fontSize((d: any) => d.fontSize)
  //     .text((d: any) => d.text)
  // }
}
</script>

<style lang='scss' scoped>
.d4{

}
</style>