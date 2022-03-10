<script setup>
import { useAPI } from "../composables/norrisAPI";

const { jokes, getJokes } = useAPI();
</script>

<template>
  <div class="w-full mx-auto">
    <div class="flex justify-center">
      <button
        @click="getJokes"
        class="bg-green-700 mt-96 mb-4 py-6 px-12 text-white rounded-full hover:bg-green-900"
      >
        Get A New Joke
      </button>
    </div>
  </div>
  <div
    class="w-full mx-auto rounded-lg bg-green-800 shadow-lg px-5 pt-5 pb-10 text-gray-800"
    style="max-width: 1000px"
  >
    <div class="w-full mb-10">
      <div class="text-6xl text-white text-left leading-tight h-3">“</div>
      <p class="text-3xl text-white text-center px-5">
        {{ jokes }}
      </p>
      <div class="text-6xl text-white text-right leading-tight h-3 -mt-3">
        ”
      </div>
    </div>
    <div class="w-full">
      <p class="text-xs text-white font-light text-right">
        Powered by Chucknorris.io
      </p>
    </div>
  </div>
</template>
