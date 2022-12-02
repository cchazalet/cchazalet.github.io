// ./components/NavLink.vue
<script>
export default {
	name: 'NavLink',
	props: ['url', 'text']
}
</script>

<template>
	<li><a :href="url">{{ text }}</a></li>
</template>