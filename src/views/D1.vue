<template>
  <div class='d1'>
    <h1>d1</h1>
    <p @click='handleToOrigin'>origin</p>
    <p @click='handleToChange'>change</p>
    <div>
      <svg id="svg">
      </svg>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
// import { Getter, Action} from 'vuex-class'
@Component({})
export default class D1 extends Vue {
  private strArr = ['apple', 'orange', 'banana']
  private margin: any = {
    top: 60,
    bottom: 60,
    left: 60,
    right: 60,
  }
  private width: number = 500
  private height: number = 500
  private dataSet: number[] = [1.2, 2.3, 3.4, 0.9, 3.3]

  private mounted() {
    this.drawChart()
  }
  private handleToOrigin() {
    this.dataSet = [1.2, 2.3, 3.4, 0.9, 3.3]
    console.log(this.dataSet, 'handleToOrigin')
    this.drawChart()
  }
  private handleToChange() {
    this.dataSet = [12, 23, 34, 9, 33]
    console.log(this.dataSet, 'handleToChange')
    this.drawChart()
  }
  private async drawChart() {
    await this.drawChartArea()
  }
  private drawChartArea() {
    const $svg = this.$d3.select('#svg')
    const $g = this.$d3.select('#svg g')
    $g.remove()
    $svg
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr('transform', `translate(${this.margin.top}, ${this.margin.left})`)
    this.drawChartAxis()
  }
  private drawChartAxis() {
    const $g = this.$d3.select('#svg g')
    // x坐标
    const xScale = this.$d3.scaleBand()
      .domain(this.$d3.range(this.dataSet.length))
      .rangeRound([0, this.width - this.margin.left - this.margin.right])
    const xAxis = this.$d3.axisBottom(xScale)
    $g.append('g')
      .attr('transform', `translate( 0, ${this.height - 2 * this.margin.bottom})`)
      .call(xAxis)
    // y坐标
    const yScale = this.$d3.scaleLinear()
      .domain([0, this.$d3.max(this.dataSet)])
      .range([this.height - this.margin.top - this.margin.bottom, 0])
    const yAxis = this.$d3.axisLeft(yScale)
    $g.append('g')
      .call(yAxis)
    this.drawChartBody(xScale, yScale)
  }
  private drawChartBody(xScale: any, yScale: any) {
    const padding: number = 30
    const $g = this.$d3.select('#svg g')
    const $bar = $g.selectAll('.rect')
      .data(this.dataSet)
      .enter()
      .append('g')
    const color: string[] = ['red', 'blue', 'yellow', '#dddddd', 'green']
    const scaleOrdinal = this.$d3.scaleOrdinal()
      .domain(Object.keys(color))
      .range(color)
    $bar.append('rect')
      .attr('x', (d: any, i: number) => {
        return xScale(i) + padding / 2
      })
      .attr('y', (d: any, i: number) => {
        return yScale(d)
      })
      .attr('width', (d: any, i: number) => {
        return xScale.step() - padding
      })
      .attr('height', (d: any, i: number) => {
        return this.height - this.margin.top - this.margin.bottom - yScale(d)
      })
      // 上色
      .data(Object.keys(color))
      .attr('fill', (d: any, i: number) => {
        return scaleOrdinal(d)
      })
    $bar.append('text')
      .attr('x', (d: any, i: number) => {
        return xScale(i) + padding / 2
      })
      .attr('y', (d: any, i: number) => {
        return yScale(d) + 10
      })
      .attr('dx', (d: any, i: number) => {
        return (xScale.step() - padding) / 2
      })
      .text((d: any) => {
        return d
      })
      
  }
}
</script>

<style lang='scss' scoped>
.d1{
  >p{
    cursor: pointer;
  }
  >rect{
    
  }
}
</style>