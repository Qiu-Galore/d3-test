<template>
  <div class='d2'>
     <h1>d2</h1>
     <div>
      <svg id="svg" ref='svg'>
      </svg>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
// import { Getter, Action} from 'vuex-class'
@Component({})
export default class D2 extends Vue {
  private width: number = 960
  private height: number = 500
  private mounted() {
    // console.log(this.$d3, '-----------this.$d3----------')
    this.drawChart()
  }
  private async drawChart() {
    const self = this
    const nodes = this.$d3.range(200).map(() => {
      return {
        radius: Math.random() * 12 + 4
      }
    })
    const rootNode = nodes[0]
    const color = this.$d3.scaleOrdinal().range(this.$d3.schemeCategory10)
    rootNode.radius = 0
    rootNode.fixed = true
    const forceX = this.$d3.forceX(this.width / 2).strength(0.015)
    const forceY = this.$d3.forceY(this.height / 2).strength(0.015)
    const force = this.$d3.forceSimulation()
      .velocityDecay(0.2)
      .force('x', forceX)
      .force('y', forceY)
      .force('collide', this.$d3.forceCollide().radius((d: any) => {
        if (d === rootNode ) {
          return Math.random() * 50 + 100;
        }
        return d.radius + 0.5;
      })
      .iterations(5))
      .nodes(nodes)
      .on('tick', ticked)
    const $svg = this.$d3.select('#svg')
      .attrAll({
        width: this.width,
        height: this.height
      })
    $svg.selectAll('circle')
      .data(nodes.slice(1))
      .enter()
      .append('circle')
      .attr('r', (d: any, i: number) => {
        return d.radius
      })
      .style('fill', (d: any, i: number) => {
        return color(i % 3)
      })
    function ticked(e: any) {
      $svg.selectAll('circle')
        .attrAll({
          cx: (d: any) => d.x,
          cy: (d: any) => d.y
        })
    }
    $svg.on('mousemove', () => {
      const p1 = self.$d3.mouse(this.$refs.svg);
      rootNode.fx = p1[0];
      rootNode.fy = p1[1];
      force.alphaTarget(0.5).restart()
    })
  }
}
</script>

<style lang='scss' scoped>
.d2{

}
</style>