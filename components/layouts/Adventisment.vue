<template>
    <div class="h-full relative  w-full" style="-webkit-mask-image: -webkit-radial-gradient(white, black);">
        <div class="banner rounded-lg sticky top-[80px] h-170 w-full">
            <div class="grid grid-cols-12 absolute top-0 left-0 z-10 w-full  w-full h-full">
                <div class="title col-start-3 col-span-8 h-fit pt-20 flex items-center flex-col">
                    <p class="text-[#d648a4] font-bold text-7xl uppercase text-center">HOT</p>
                    <p class="font-bold text-7xl uppercase text-white text-center">Now</p>
                    <p class=" text-white text-2xl font-bold mt-10 p-0 text-center">Explore our best-selling products!</p>
                <UButton
                  label="Xem ngay"
                  class="h-fit mt-10 p-0"
                  :ui="{
                    base: [
                      'rounded-[20px] bg-[linear-gradient(115deg,_#d648a4,_#a948d6)] hover:bg-[linear-gradient(115deg,_#d648a4,_#a948d6)] hover:opacity-70 w-4/12 h-10 justify-center uppercase text-[1rem]',
                    ],
                  }"
                />
                </div>
            </div>
            <div class="media absolute top-0 left-0 bottom-0 w-full h-full">  
            <NuxtImg src="https://multi-themes.myshopify.com/cdn/shop/files/linus-mimietz-nCYpagkCh-U-unsplash_720x.webp?v=1695793013" alt="x1 gen 12" class="rounded-lg w-full  h-full" />
            </div>
        </div>
    </div>
</template>