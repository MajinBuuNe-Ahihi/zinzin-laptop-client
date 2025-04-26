<template>
  <div class="size-full flex flex-col justify-start items-center gap-y-10">
    <UCarousel
      v-slot="{ item }"
      loop
      arrows
      :autoplay="{ delay: 6000 }"
      prev-icon="i-material-symbols:arrow-back-ios-new-rounded"
      next-icon="i-material-symbols:arrow-forward-ios-rounded"
      :items="itemSlide"
      class="size-full mx-auto h-150"
      :ui="{
        prev: 'absolute cursor-pointer rounded-[5px] ring-0 !bg-white/70  left-1',
        next: 'absolute cursor-pointer rounded-[5px] ring-0 !bg-white/70 right-1',
        item: 'pt-0 pl-0 pr-0',
      }"
    >
      <div
        :key="item.title"
        class="bg-tic-tac-toe h-150 size-full"
        :class="item.class"
      >
        <div
          class="size-full grid grid-cols-12 gap-4 z-10 absolute top-0 bottom-0 left-0 right-0"
        >
          <div class="col-start-3 col-span-8 grid grid-cols-12 gap-4">
            <div class="col-span-6 flex flex-col justify-center">
              <div class="text-7xl text-white w-120">{{ item.title }}</div>
              <div
                class="text-lg text-white mt-[10px] w-120"
                v-html="item.html"
              />
            </div>
            <div class="col-span-6">
              <NuxtImg :src="item.image" alt="x1 gen 12" class="rounded-md" />
            </div>
          </div>
        </div>
        <div class="animation-icon" />
      </div>
    </UCarousel>
    <div class="best-sale container">
      <div class="grid grid-cols-12 gap-x-5">
        <div class="col-span-7 grid grid-cols-12 gap-4">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
        <Adventisment class="col-span-5" />
      </div>
    </div>
    <div class="stage w-full">
      <div class="text-xl font-bold text-center mt-8">Ultimate Performance</div>
      <div class="text-7xl font-bold text-center mb-16">
        The <strong>Best</strong> Setup
      </div>
      <div class="best-setup relative w-full h-fit">
        <NuxtImg src="/background-setup.png" alt="setup" class="w-full h-200" />
        <div
          class="hotspot-container w-full h-200 absolute top-0 left-0 right-0 bottom-0 grid grid-cols-50 grid-rows-30"
        >
          <template v-for="(item, index) in items" :key="index">
            <HotSpot :class="item.class" />
          </template>
        </div>
      </div>
    </div>
    <div class="stage w-full">
      <div class="text-xl text-gray-500 text-center mt-8">
        All Products in One Place
      </div>
      <div class="text-4xl font-bold text-center mb-8">Featured Categories</div>
      <div class="all-product w-full flex justify-center">
        <div class="container grid grid-cols-12 gap-4">
          <template v-for="item in categories" :key="item.name">
            <CardCategory :name="item.name" :image="item.image" />
          </template>
        </div>
      </div>
    </div>
    <div class="stage w-full overflow-hidden">
      <div
        class="bg-bubble h-28 size-full relative !bg-[linear-gradient(46deg,_rgba(52,_133,_236,_1)_13%,_rgba(170,_248,_219,_1)_86%)]"
      >
        <div class="animation-icon bottom bg-white" />
        <div class="overflow-hidden whitespace-nowrap h-full top-0 bottom-0 absolute z-[999]">
          <div
            class="flex antialiased h-full drop-shadow-lg items-center animate-marquee space-x-12 text-white text-5xl font-bold"
          >
            <span>Free Shipping Over $100</span>
            <span>Free 2-day Delivery</span>
            <span>Free Shipping Over $100</span>
            <span>Free 2-day Delivery</span>
            <span>Free Shipping Over $100</span>
            <span>Free 2-day Delivery</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Adventisment from "@/components/layouts/Adventisment.vue";
import "@assets/style/index.css";

definePageMeta({
  layout: "main-layout",
});

let itemSlide = ref([
  {
    title: "X1 Gen 12",
    html: `Sử dụng chip Intel Core Ultra 5 hoặc Ultra 7, tích hợp NPU AI
         giúp tăng hiệu suất xử lý tác vụ thông minh, tiết kiệm pin.
         <br/>
         Hỗ trợ Intel Evo™ Platform, khởi động nhanh, tối ưu hoá đa nhiệm`,
    image: "x1 gen 12.png",
    class: "bg-tic-tac-toe",
  },
  {
    title: "X1 Yoga Gen 7",
    html: `Sử dụng chip Intel Core i7 thế hệ 12, thiết kế mỏng nhẹ 2-trong-1 linh hoạt,
hỗ trợ cảm ứng và bút stylus, phù hợp cho sáng tạo và ghi chú.
<br/>
Hỗ trợ Intel Evo™, hiệu suất ổn định, thời lượng pin dài, khởi động nhanh.`,
    image: "yoga gen 7.png",
    class: "bg-bubble",
  },
  {
    title: "P1 Gen 5",
    html: `Sử dụng chip Intel Core i7 thế hệ 12 hoặc 13, kết hợp GPU NVIDIA RTX chuyên nghiệp,
mang lại hiệu suất mạnh mẽ cho công việc đồ họa, kỹ thuật.
<br/>
Hỗ trợ Intel vPro®, bảo mật cao, tối ưu cho doanh nghiệp và chuyên gia.`,
    image: "p1 gen 5.png",
    class: "bg-bank-note",
  },
]);
let items = ref([
  {
    class: "col-start-25 row-start-13",
  },
  {
    class: "col-start-25 row-start-25",
  },
  {
    class: "col-start-31 row-start-25",
  },
  {
    class: "col-start-40 row-start-22",
  },
  {
    class: "col-start-12 row-start-22",
  },
  {
    class: "col-start-16 row-start-21",
  },
  {
    class: "col-start-25 row-start-21",
  },
]);
let categories = ref([
  {
    name: "Màn hình",
    image:
      "https://multi-themes.myshopify.com/cdn/shop/files/S9f6618d6426746dc85d0cf387e254ff7c.jpg_640x640_6e54167d-b87a-4749-b6e1-714e91947ec8.webp?v=1693227076",
  },
  {
    name: "Laptop",
    image:
      "https://multi-themes.myshopify.com/cdn/shop/files/Sa759c33cae5d495d97c4034ad250094bn.jpg_640x640_5bd78108-f80d-487d-9919-80ae876d6cd6.webp?v=1693480710",
  },
  {
    name: "TiVi",
    image:
      "https://multi-themes.myshopify.com/cdn/shop/files/S66774fe8a337469f9c28b954d56be22cJ_08f9bb22-e005-4db1-b634-f2ae3c874e38.jpg?v=1693480866",
  },
  {
    name: "Home Audio",
    image:
      "https://multi-themes.myshopify.com/cdn/shop/files/KYYSLB-5-1-Home-Theater-Sound-System-Audio-Set-Living-Room-Home-Amplifier-Speaker-Audio-3dnews_jpg_b37d9fe2-0bf0-4251-9512-756ae8bd8d1a.webp?v=1693481335",
  },
  {
    name: "Digital Cameras",
    image:
      "https://multi-themes.myshopify.com/cdn/shop/files/S7a9efa243ee04e9f80e851bab44d2569I.jpg_640x640_7d75be05-b384-4c6b-96e7-cc4cb231bb0a.webp?v=1693480348",
  },
  {
    name: "VR headsets",
    image:
      "https://multi-themes.myshopify.com/cdn/shop/files/H8f7b776a4ee44e5692c1f59eb92c082bA.jpg_640x640_8d6e5a3d-e5c1-4a39-a3df-04877e64ba88.webp?v=1693479739",
  },
  {
    name: "Điều khiển",
    image:
      "https://multi-themes.myshopify.com/cdn/shop/files/A60db686da71041be9bcb6fa3daa9880fd.png_640x640_4d80f1d8-6651-4e96-858f-36f2c2a43f92.webp?v=1693481056",
  },
  {
    name: "Headsets",
    image:
      "https://multi-themes.myshopify.com/cdn/shop/files/S2eeb0c70be6f48d996b76cc46e3801a7J.jpg_640x640_1_cb824e30-7314-42b7-9f89-d4cdfa59d589.webp?v=1693490398",
  },
  {
    name: "Smartwatches",
    image:
      "https://multi-themes.myshopify.com/cdn/shop/files/S0fd30be056974cdcb92b441c4b970ef34.jpg_640x640_e6ad0284-1066-4fe7-babd-5892ebb2576b.webp?v=1693490972",
  },
  {
    name: "components",
    image:
      "https://multi-themes.myshopify.com/cdn/shop/files/A03d5bcabeb224ba59deb341c8f451ec0N.jpg_640x640_1_95716a33-46ae-494c-8218-aee18862a96d.webp?v=1693491747",
  },
  {
    name: "Smartphones",
    image:
      "https://multi-themes.myshopify.com/cdn/shop/files/Sd552682ec858485fbd51f8f7cce670755.jpg_640x640_ef9ada32-8931-4fba-b154-15e4f4287065.webp?v=1693490593",
  },
  {
    name: "Peripherals",
    image:
      "https://multi-themes.myshopify.com/cdn/shop/files/Scef68df50809499cba941fb8dd66528aX.jpg_640x640_070b00ec-fe9e-4140-940c-fc980fa8cacc.webp?v=1693490784",
  },
]);
</script>

<style scoped>
.best-setup {
  position: relative;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}
.stage strong {
  background: #bd40c7;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
