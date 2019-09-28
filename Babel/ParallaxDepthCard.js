Vue.config.devtools = true;

Vue.component("card", {
  template: `
		<div class="card-wrap" @mousemove="handleMouseMove" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" ref="card">
			<a :href="[cardLink]" class="card" :style="cardStyle">
				<div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
				<div class="card-info">
					<slot name="header"></slot>
					<slot name="content"></slot>
				</div>
			</a>
		</div>
	`,
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  props: ["dataImage", "dataLink"],
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null
  }),
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      };
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`
      };
    },
    cardLink() {
      return this.dataLink;
    }
  },
  methods: {
    handleMouseMove(e) {
      if (jQuery("#Output .fp-scroller").length != 0) {
        var modified = jQuery("#Output .fp-scroller").css("transform");
        var vel = modified.substring(22, modified.length - 1);
        vel = vel.replace("-", "");
        vel = Number(vel);

        this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
        this.mouseY =
          e.pageY - this.$refs.card.offsetTop - this.height / 2 + vel;
      } else {
        this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
        this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
      }
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    }
  }
});

const app = new Vue({
  el: "#app"
});
