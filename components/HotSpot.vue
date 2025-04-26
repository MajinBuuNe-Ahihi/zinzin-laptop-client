<template>
  <UPopover arrow mode="hover">
    <div class="circles h-7 w-7 flex justify-center items-center relative">
      <UButton
        color="neutral"
        variant="subtle"
        class="top-0 left-0 right-0 bottom-0 z-10 rounded-3xl relative h-7 w-7 cursor-pointer flex justify-center items-center text-lg"
        icon="i-material-symbols:add-rounded"
      />
      <div class="circle1"/>
      <div class="circle2"/>
      <div class="circle3"/>
    </div>
    <template #content>
      <div class="hotspot-contain grid grid-cols-2 p-2 h-30">
        <NuxtImg
          src="https://multi-themes.myshopify.com/cdn/shop/products/647f023074b48976b5853b3c_200x.webp?v=1693224343"
          alt="setup"
          class="w-20 h-20"
        />
        <div class="flex flex-col justify-start items-start gap-1 w-full">
          <div
            class="tag flex flex-wrap justify-start items-start gap-2 w-full"
          >
            <UBadge color="warning">Mới</UBadge>
            <UBadge color="warning">giảm giá</UBadge>
          </div>
          <div class="name text-start font-bold text-lg w-full">
            X1 Yoga gen 6
          </div>
          <div class="flex items-center justify-start">
            <UIcon
              name="i-material-symbols-light:star"
              class="!w-5 !h-5 cursor-pointer text-yellow-400"
            />
            <UIcon
              name="i-material-symbols-light:star-half"
              class="!w-5 !h-5 cursor-pointer text-yellow-400"
            />
            <UIcon
              name="i-material-symbols-light:star-outline"
              class="!w-5 !h-5 cursor-pointer"
            />
            <UKbd class="font-bold rounded-full" variant="subtle">1</UKbd>
          </div>
          <div class="price text-start font-light italic text-[14px] w-full">
            From 100$
          </div>
        </div>
      </div>
    </template>
  </UPopover>
</template>
<script lang="ts" setup>
import "@assets/style/index.css";
</script>

<style scoped>
.circles div {
  animation: growAndFade 3s infinite ease-in-out;
  background-color: rgba(203, 229, 252, 0.603);
  border-radius: 50%;
  height: 100%;
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0px;
  right: 0px;
  top: 0px;
  left: 0px;
}

.circle1 {
  animation-delay: 5s;
}
.circle2 {
  animation-delay: 6s;
}
.circle3 {
  animation-delay: 6s;
}

@keyframes growAndFade {
  0% {
    opacity: 0.55;
    transform: scale(0);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.4);
  }
  100% {
    opacity: 0.55;
    transform: scale(0);
  }
}
</style>
