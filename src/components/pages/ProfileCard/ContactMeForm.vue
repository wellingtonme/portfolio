<template>
  <v-form v-model="valid">
    <v-text-field
      label="Name"
      v-model="name"
      :rules="nameRules"
      :counter="10"
      required
    />
    <v-text-field
      label="Subject"
      v-model="subject"
      :rules="subjectRules"
      required
    />
    <v-text-field
      label="E-mail"
      v-model="email"
      :rules="emailRules"
      required
    />
  </v-form>
</template>

<script>
export default {
	name: 'ContactMeForm',
	data: () => ({
		valid: false,
		name: '',
		nameRules: [
			v => !!v || 'Name is required',
			v => v.length <= 10 || 'Name must be less than 10 characters'
		],
		email: '',
		emailRules: [
			v => !!v || 'E-mail is required',
			v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
		],
		subject: '',
		subjectRules: [
			v => !!v || 'Subject is required',
			v => v.length <= 10 || 'Suject must be less than 10 characters'
		]
	})
}
</script>

<style>

</style>
