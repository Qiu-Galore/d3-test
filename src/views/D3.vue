<template>
  <div class='d3'>
    <div id='chained'></div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
// import { Getter, Action} from 'vuex-class'
@Component({})
export default class D3 extends Vue {
  private width: number = 960
  private height: number = 500
  private num: number = 4002
  private mounted() {
    this.drawChart()
  }
  private async drawChart() {
    this.width = document.body.clientWidth
    this.height = document.body.clientHeight
    const d3 = this.$d3
    const self = this
    const whiteblue = d3.interpolateRgb('#eee', 'steelblue')
    const blueorange = d3.interpolateRgb('steelblue', 'orange')
    const orangewhite = d3.interpolateRgb('orange', '#eee')
    const data = d3.range(this.num)
    d3.select('#chained').selectAll('div')
      .data(data)
      .enter()
      .append('div')
      .attr('class', 'item')
      .transition()
        .delay((d: any, i: number) => i + Math.random() * this.num / 4) // 类似于延迟执行
        .ease(d3.easeLinear)
        .on('start', function repeat(this: any) {
          d3.active(this)
              .styleTween('background-color', () => whiteblue)
            .transition()
              .delay(self.num)
              .styleTween('background-color', () => blueorange)
            .transition()
              .delay(self.num)
              .styleTween('background-color', () => orangewhite)
            .transition()
              .delay(self.num)
              .on('start', repeat)
        })
  }
}
</script>

<style lang='scss' scoped>
.d3{
  #chained{
    max-width: 960px;
    margin: 10px auto;
    display: flex;
    flex-wrap: wrap;
    /deep/
    .item{
      flex-shrink: 0;
      width: 10px;
      height: 10px;
      margin: 1px 0 0 1px;
      background: #eee;
    }
  }
}
</style>