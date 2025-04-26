<template>

    <UCard
            variant="subtle"
            class="col-span-4"
            :ui="{
              root: 'rounded-lg bg-white',
              header: 'p-0 sm:px-0 border-0',
              body: 'p-2 sm:p-2  border-0',
              footer: 'p-2 sm:px-2  border-0',
            }"
          >
            <template #header>
              <UCarousel
                ref="carousel"
                v-slot="{ item }"
                fade
                dots
                :items="iventoryImage"
                class="w-full max-w-xs mx-auto p-0"
                :ui="{
                  dots: 'absolute inset-x-0 bottom-4 ',
                  dot: [
                    'size-2',  
                  ],
                }"
                @mousemove="hoverScroll"
              >
                <NuxtImg :src="item" alt="x1 gen 12" class="rounded-lg w-full" />
              </UCarousel>
            </template>

            <div class="flex flex-col justify-center items-start gap-1 w-full">
              <div
                class="tag flex flex-wrap justify-center items-center gap-2 w-full"
              >
                <UBadge color="warning">Mới</UBadge>
                <UBadge color="warning">giảm giá</UBadge>
              </div>
              <div class="name text-center font-bold text-xl w-full">
                X1 Yoga gen 6
              </div>
              <div
                class="price text-center font-light italic text-[14px] w-full"
              >
                From 100$
              </div>
              <div class="compare w-full flex justify-center items-center">
                <UCheckbox label="So sánh" color="neutral" class="cursor-pointer" />
              </div>
            </div>

            <template #footer>
              <div class="flex justify-center">
                <UButton
                  label="Chi tiết"
                  :ui="{
                    base: [
                      'rounded-[20px] bg-black hover:bg-black hover:opacity-70 w-10/12 justify-center',
                    ],
                  }"
                />
              </div>
            </template>
          </UCard>
</template>
<script lang="ts" setup>
import * as _ from "lodash";

const iventoryImage = ref([
  "https://picsum.photos/640/640?random=1",
  "https://picsum.photos/640/640?random=2",
  "https://picsum.photos/640/640?random=3",
  "https://picsum.photos/640/640?random=4",
  "https://picsum.photos/640/640?random=5",
  "https://picsum.photos/640/640?random=6",
]);
const carousel = useTemplateRef("carousel");
const hoverScroll = _.throttle((e) => {
  const boundingBox = e.target.getBoundingClientRect();
  const mouseX = e.clientX;
  const relativeX = mouseX - boundingBox.left;
  const percent = (relativeX / boundingBox.width) * 100;

  const embla = carousel.value?.emblaApi;
  const current = embla?.selectedScrollSnap?.() ?? 0;

  if (percent <= 20) {
    embla?.scrollTo?.(current - 1, true); // chuyển mượt
  } else if (percent >= 80) {
    embla?.scrollTo?.(current + 1, true);
  }
}, 150);
</script>