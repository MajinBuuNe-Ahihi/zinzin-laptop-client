<template>
  <div class="text-white">
    <div class="head-inf flex flex-col">
      <div
        class="notification !pl-3.5 !pr-3.5 h-8 leading-8 !mb-0.5 bg-primary-color flex justify-between items-center"
      >
        <span>Giảm giá các đơn hàng 300-500k khi đăng nhập lần đầu tiên </span>
        <UIcon
          name="i-material-symbols:close-rounded"
          class="!h-6 !w-6 cursor-pointer"
        />
      </div>
      <div
        class="short-info flex justify-between items-center h-8 !pl-3.5 !pr-3.5 bg-primary-color"
      >
        <div class="fee-ship flex items-center gap-2.5">
          <UIcon
            name="i-material-symbols:delivery-truck-speed"
            class="!h-6 !w-6"
          />
          <span>Miễn ship trong nội thành</span>
        </div>
        <div class="more-info flex items-center gap-2.5">
          <div class="contact flex gap-2.5">
            <div class="contact-item item-social">
              <UIcon name="i-material-symbols:mail-rounded" class="!h-6 !w-6" />
              <span>zinzinlaptop14.qn@gmail.com</span>
            </div>
            <div class="contact-item item-social">
              <UIcon
                name="i-material-symbols:phone-in-talk-watchface-indicator-sharp"
                class="!h-6 !w-6"
              />
              <span>03358727219</span>
            </div>
          </div>
          <div class="social flex gap-2.5">
            <UIcon name="i-line-md:facebook" class="!h-6 !w-6" />
            <UIcon name="i-line-md:youtube" class="!h-6 !w-6" />
            <UIcon name="i-line-md:tiktok" class="!h-6 !w-6" />
            <UIcon name="i-line-md:twitter-x" class="!h-6 !w-6" />
            <UIcon name="i-line-md:instagram" class="!h-6 !w-6" />
          </div>
          <div class="currency">
            <USelectMenu
              v-model="value"
              :icon="value?.icon"
              :items="items"
              class="w-40 bg-transparent !text-white"
              variant="none"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="head bg-[linear-gradient(141deg,_rgba(251,51,166,1),_rgba(48,145,211,1)_100%)] flex justify-between gap-x-10 items-center !pl-3.5 !pr-3.5 min-h-20"
    >
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-12 gap-x-2">
          <div class="logo text-2xl font-bold uppercase col-span-2">
            ZinZinLaptop
          </div>
          <div
            class="seek flex justify-between items-center flex-1 gap-x-5 col-span-8"
          >
            <div class="catalog">
              <UDrawer direction="top">
                <UButton
                  label="Shop All"
                  trailing-icon="i-lucide-chevron-up"
                  class="!bg-transparent text-white !border-none !outline-none cursor-pointer text-xl uppercase"
                />
                <template #content>
                  <Placeholder class="min-w-96 min-h-96 size-full m-4" />
                </template>
              </UDrawer>
            </div>
            <div class="search size-full flex items-center justify-center">
              <UPopover mode="click">
                <UButtonGroup>
                  <USelectMenu
                    v-model="device"
                    :items="devices"
                    :ui="{
                      base: 'w-36 h-10 bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white',
                    }"
                  />
                  <UInput
                    v-model="search"
                    placeholder="Type to search..."
                    :ui="{
                      base: 'h-10 bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white w-124 !focus:ring-0 focus:border-white/50',
                    }"
                  >
                    <template #trailing>
                      <button
                        @click="handleSearch"
                        class="p-1 hover:text-black text-gray-400 cursor-pointer"
                      >
                        <UIcon
                          name="i-heroicons-magnifying-glass-20-solid"
                          class="w-5 h-5 mr-2"
                        />
                      </button>
                    </template>
                  </UInput>
                </UButtonGroup>

                <template #content>
                  <Placeholder class="w-160 inline-flex h-10" />
                </template>
              </UPopover>
            </div>
          </div>
          <div class="funtion flex justify-end items-center gap-10 col-span-2">
            <div class="switch-theme">
              <USwitch
                class="cursor-pointer"
                unchecked-icon="i-line-md:moon-filled-loop"
                checked-icon="i-line-md:moon-filled-alt-to-sunny-filled-loop-transition"
                default-value
                size="xl"
                :ui="{
                  base: [
                    'inline-flex items-center data-[state=checked]:bg-(--ui-warning)  data-[state=unchecked]:bg-gray-700 shrink-0 rounded-full border-2 border-transparent focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer',
                    'transition-[background] duration-200',
                  ],
                  container: 'flex items-center',
                  thumb:
                    'group pointer-events-none rounded-full bg-(--ui-bg) shadow-lg ring-0 transition-transform duration-200 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:rtl:-translate-x-0 flex items-center justify-center',
                  icon: [
                    'absolute group-data-[state=checked]:!text-(--ui-warning) shrink-0 group-data-[state=unchecked]:!text-gray-700  size-10/12',
                    'duration-200',
                  ],
                }"
              />
            </div>
            <div class="user" @click="() => (islogin = !islogin)">
              <UChip inset v-if="islogin">
                <UAvatar
                  src="https://github.com/benjamincanac.png"
                  alt="Benjamin Canac"
                  class="cursor-pointer"
                />
              </UChip>
              <UAvatar
                v-else
                src="https://github.com/benjamincanac.png"
                alt="Benjamin Canac"
                class="cursor-pointer"
              />
            </div>
            <div class="cart">
              <UIcon
                name="i-clarity:shopping-cart-line"
                class="!w-6 !h-6 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav bg-nav">
      <div class="container mx-auto">
        <UNavigationMenu
          highlight
          variant="link"
          highlight-color="primary"
          orientation="horizontal"
          :items="nav"
          :ui="{
            root: 'relative flex gap-1.5 [&>div]:min-w-0 text-white',
            list: 'isolate min-w-0 text-white',
            label:
              'w-full flex items-center gap-1.5 font-semibold text-xs/5 !text-white px-2.5 py-1.5',
            item: 'min-w-0',
            link: ' hover:opacity-75 text-white group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2',
            linkLeadingIcon: 'shrink-0 size-5 !text-white',
            linkLeadingAvatar: 'shrink-0 text-white',
            linkLeadingAvatarSize: '2xs text-white',
            linkTrailing: 'ms-auto inline-flex gap-1.5 items-center text-white',
            linkTrailingBadge: 'shrink-0 text-white',
            linkTrailingBadgeSize: 'sm text-white',
            linkTrailingIcon:
              'size-5 transform shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200 !text-white',
            linkLabel: 'truncate !text-white  hover:text-white',
            linkLabelExternalIcon: 'inline-block size-3 align-top text-white',
            separator: 'px-2 h-px bg-white',
            viewportWrapper: 'absolute top-full left-0 flex w-full',
            viewport:
              'relative overflow-hidden bg-(--ui-bg) shadow-lg rounded-md ring ring-(--ui-border) h-(--reka-navigation-menu-viewport-height) w-full transition-[width,height,left] duration-200 origin-[top_center] data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] z-[1]',
            content: 'absolute top-0 left-0 w-full sm:w-auto text-white',
            indicator:
              'text-white absolute data-[state=visible]:animate-[fade-in_100ms_ease-out] data-[state=hidden]:animate-[fade-out_100ms_ease-in] data-[state=hidden]:opacity-0 bottom-0 z-[2] w-(--reka-navigation-menu-indicator-size) translate-x-(--reka-navigation-menu-indicator-position) flex h-2.5 items-end justify-center overflow-hidden transition-[translate,width] duration-200 text-white',
            arrow:
              'relative top-[50%] size-2.5 rotate-45 border border-(--ui-border) bg-(--ui-bg) z-[1] rounded-xs',
          }"
        >
          <template #article-trailing>
            <UBadge label="44" variant="subtle" size="sm" />
          </template>       
        </UNavigationMenu>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import "@assets/style/head.css";
import type { SelectMenuItem } from "@nuxt/ui";

import type { NavigationMenuItem } from "@nuxt/ui";

let islogin = ref(true);

const items = ref([
  {
    label: "Việt Nam Đồng",
    value: "c-vi",
    icon: "i-tabler:currency-dong",
  },
  {
    label: "US Dollar",
    value: "c-us",
    icon: "i-solar:dollar-line-duotone",
  },
] satisfies SelectMenuItem[]);
const value = ref(items.value[0]);

const search = ref("");
const devices = ["All", "Lenovo", "Dell", "Hp"];
const device = ref(devices[0]);

const nav = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Laptop",
      icon: "i-material-symbols:computer-outline-rounded",
      active: true,
      children: [
        {
          label: "Introduction",
          description: "Fully styled and customizable components for Nuxt.",
          icon: "i-lucide-house",
        },
        {
          label: "Installation",
          description:
            "Learn how to install and configure Nuxt UI in your application.",
          icon: "i-lucide-cloud-download",
        },
        {
          label: "Icons",
          icon: "i-lucide-smile",
          description:
            "You have nothing to do, @nuxt/icon will handle it automatically.",
        },
        {
          label: "Colors",
          icon: "i-lucide-swatch-book",
          description:
            "Choose a primary and a neutral color from your Tailwind CSS theme.",
        },
        {
          label: "Theme",
          icon: "i-lucide-cog",
          description:
            "You can customize components by using the `class` / `ui` props or in your app.config.ts.",
        },
      ],
    },
    {
      label: "Điện thoại",
      icon: "i-tabler:device-ipad",
      children: [
        {
          label: "defineShortcuts",
          icon: "i-lucide-file-text",
          description: "Define shortcuts for your application.",
          to: "/composables/define-shortcuts",
        },
        {
          label: "useOverlay",
          icon: "i-lucide-file-text",
          description: "Display a modal/slideover within your application.",
          to: "/composables/use-overlay",
        },
        {
          label: "useToast",
          icon: "i-lucide-file-text",
          description: "Display a toast within your application.",
          to: "/composables/use-toast",
        },
      ],
    },
    {
      label: "Phụ Kiện",
      icon: "i-solar:headphones-square-outline",
      to: "/components",
      defaultOpen: true,
      children: [
        {
          label: "Link",
          icon: "i-lucide-file-text",
          description: "Use NuxtLink with superpowers.",
          to: "/components/link",
        },
        {
          label: "Modal",
          icon: "i-lucide-file-text",
          description: "Display a modal within your application.",
          to: "/components/modal",
        },
        {
          label: "NavigationMenu",
          icon: "i-lucide-file-text",
          description: "Display a list of links.",
          to: "/components/navigation-menu",
        },
        {
          label: "Pagination",
          icon: "i-lucide-file-text",
          description: "Display a list of pages.",
          to: "/components/pagination",
        },
        {
          label: "Popover",
          icon: "i-lucide-file-text",
          description:
            "Display a non-modal dialog that floats around a trigger element.",
          to: "/components/popover",
        },
        {
          label: "Progress",
          icon: "i-lucide-file-text",
          description: "Show a horizontal bar to indicate task progression.",
          to: "/components/progress",
        },
      ],
    },
     {
      label: "Lịch sử đã xem",
      icon: "i-material-symbols:history",
      defaultOpen: true,
      disabled: false,
      children: [
        {
          label: "Progress",
          icon: "i-lucide-file-text",
          description: "Show a horizontal bar to indicate task progression.",
          to: "/components/progress",
        },
      ],
    },
  ],
  [
    {
      label: "Bài viết",
      icon: "i-material-symbols:book-2-outline-rounded",
      disabled: false,
      to: "https://github.com/nuxt/ui",
      slot: "article" as const,
    },
    {
      label: "Khuyến mãi",
      icon: "i-lsicon:badge-promotion-outline",
      disabled: false,
      to: "https://github.com/nuxt/ui",
    },
    {
      label: "Thông tin",
      icon: "i-ri:information-2-line",
      disabled: false,
      to: "https://github.com/nuxt/ui",
    },
    {
      label: "Hỗ trợ",
      icon: "i-lucide-circle-help",
      disabled: false,
      to: "https://github.com/nuxt/ui",
    },
  ],
]);
</script>
