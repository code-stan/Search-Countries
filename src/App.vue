<script setup>
	import axios from "axios";
	import { ref, watch, onMounted } from "vue";

	import Header from "./components/Header/Header.vue";
	import DisplayCountry from "./components/Body/DisplayCountry.vue";

	const regionSelected = ref("Filter by Region");
	const searchResults = ref({});
	const dataRef = ref([]);
	const arr = ref([]);

	const toggleRegions = (newSelection) => {
		regionSelected.value = newSelection;
	};
	const fetchSearchResults = async (query) => {
		try {
			const response = await axios.get(`https://restcountries.com/v3.1/name/${query}`);
			searchResults.value = response.data;
		} catch (error) {
			console.error("Error fetching search results:", error);
		}
	};
	onMounted(() => {
		axios
			.get("https://restcountries.com/v3.1/all")
			.then((response) => {
				dataRef.value = response.data;
				arr.value = response.data;
				console.log(dataRef);
			})
			.catch((err) => console.log(err));
	});
	watch(regionSelected, (newVal) => {
		dataRef.value = arr.value;
		const filteredData =
			newVal !== "All"
				? dataRef.value.filter((item) => {
						return newVal === item.region;
				  })
				: arr.value;
		dataRef.value = filteredData;
	});
	watch(searchResults, (newVal) => {
		dataRef.value = searchResults === null || undefined ? arr.value : searchResults.value;
	});
</script>

<template>
	<Header @query-search="fetchSearchResults" :region-selected="regionSelected" @toggle-regions="toggleRegions" :search-results="searchResults" />
	<DisplayCountry :data-ref="dataRef" :arr="arr" :region-selected="regionSelected" :search-results="searchResults" />
</template>

<style scoped lang="scss"></style>
