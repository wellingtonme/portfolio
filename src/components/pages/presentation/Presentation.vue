<template>
  <section>
    <v-parallax height="400"/>
    <v-container 
      fluid
      class="presentation-card">
      <v-layout
        row
        wrap>
        <v-flex 
          xs12
          sm12
          md8
          lg6
          xl6
          offset-md2
          offset-lg3>
          <v-card>
            <v-card-text>
              <v-container>
                <card-text-row classes="profile--preword">
                  <span>Hello there!</span>
                </card-text-row>
                <card-text-row classes="profile--name">
                  <span>I'm Wellington,</span>
                </card-text-row>
                <card-text-row classes="profile--role">
                  <span>Fullstack developer &lt; &frasl; &gt;</span>
                </card-text-row>
                <card-text-row classes="profile--description">
                  <p>I'm a Web Fullstack Developer who loves VueJs and Node, 
                  passionate problem-solver, owner of 4 cats &#128062; and 
                  I like to watch videos of dressed dancing cats.</p>
                </card-text-row>
                <card-text-row classes="profile--quote">
                  <span>Working to make the internet a better place!</span>
                </card-text-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import CardTextRow from "./CardTextRow.vue";
export default {
  name: "Presentation",
  components: {
    CardTextRow
  }
};
</script>

<style lang="stylus" scoped>
.parallax
	position absolute
	top 0
	right 0
	left 0
	background-image url('https://c2.staticflickr.com/8/7331/9262740777_f69bca112c_b.jpg')
	background-size cover
	background-position-y center
	&::before
		background-color rgba(0, 0, 0, 0.8)
		content ''
		top 0
		left 0
		width 100%
		height 100%
		position absolute

.presentation-card
	margin-top 200px

.profile
	&--preword
		& > span
			font-size 12px
			color #bebebe
	&--name
		& > span
			font-size 40px
			font-weight lighter
	&--role
		& > span
			font-size 30px
			font-weight bold
			color #bebebe
	&--description
		& > p
			padding-top: 10px !important
			font-size 16px
			font-weight lighter
			color #bebebe
			margin-bottom 10px
	&--quote
		& > span
			font-size 16px
			font-style italic
			color #bebebe
</style>
