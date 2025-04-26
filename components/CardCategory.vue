<template>
  <ULink to="/components/link" class="col-span-2 text-black">
    <UCard
      class="w-full overflow-hidden"
      :ui="{
        root: 'rounded-lg bg-white ring-0',
        header: 'p-0 border-0',
        body: 'p-0 border-0 flex justify-center items-center',
        footer: 'pb-6 pt-3 border-0',
      }"
    >
      <div
        class="relative group aspect-[1/1] h-2/3 max-h-32 w-full overflow-hidden rounded-lg image-contain"
      >
        <NuxtImg
          :src="props.image"
          alt="setup"
          class="h-full w-full object-cover object-center transition duration-300"
        />
        <div class="loading-placeholder"/>
      </div>

      <template #footer>
        <div class="text-center !font-bold capitalize">{{ props.name }}</div>
      </template>
    </UCard>
  </ULink>
</template>
<script lang="ts" setup>
const props = defineProps(["name", "image"]);
</script>
