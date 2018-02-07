<template>
  <section>
    <v-parallax>

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
                  <v-layout
                    row
                    wrap
                  >
                    <v-flex>
                      <div class="profile-preword elevation-1">
                        <span>Hi there!</span>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

    </v-parallax>
  </section>
</template>

<script>
export default {
	name: 'Presentation'
}
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
	&:before 
		background-color rgba(0,0,0,0.8)
		content ''
		top 0
		left 0
		width 100%
		height 100%
		position absolute

.presentation-card
	margin-top: 150px

.profile-preword
	float left
	background-color #2196F3
	padding 10px
	color: #030303
	& span::before
		content ''
		width 0
		height 0
		top 70%
		left 32px
		display block 
		position absolute
		border-style solid
		border-width 0 0 8px 8px
		border-color transparent
		border-left-color #2196F3
</style>
