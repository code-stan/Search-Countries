<script setup>
	import { RouterView } from "vue-router";
	import Nav from "./components/Nav/Nav.vue";
	import { onBeforeMount, ref } from "vue";

	let currentTheme = ref("");
	onBeforeMount(() => {
		const body = document.body;
		let getTheme = localStorage.getItem("theme");
		const prefersLightColorScheme = (mode) => window && window.matchMedia && window.matchMedia(`(prefers-color-scheme: ${mode})`).matches;
		!getTheme && prefersLightColorScheme("dark") ? getTheme = "dark" : !getTheme && prefersLightColorScheme("light") ? getTheme = "light" : getTheme;

		if (getTheme === "dark") {
			body.classList.add("active");
			currentTheme.value = "Light Mode";
		} else if(getTheme === "light"){
			body.classList.remove("active");
			currentTheme.value = "Dark Mode";
		}
	});
</script>

<template>
	<Nav :current-theme="currentTheme" />
	<RouterView />
</template>

<style scoped></style>
