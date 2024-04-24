<script setup>
	import { RouterView } from "vue-router";
	import Nav from "./components/Nav/Nav.vue";
	import { onBeforeMount, onMounted, ref } from "vue";

	let currentTheme = ref("");
	onBeforeMount(() => {
		const body = document.body;
		const getTheme = localStorage.getItem("theme");

		const prefersLightColorScheme = (mode) => window && window.matchMedia && window.matchMedia(`(prefers-color-scheme: ${mode})`).matches;
    
		if (getTheme === "dark" || prefersLightColorScheme("dark")) {
			body.classList.add("active");
			currentTheme.value = "Light Mode";
		} else if(getTheme === "light" || prefersLightColorScheme("light")){
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
