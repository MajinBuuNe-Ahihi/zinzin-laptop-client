<template>
  <div class="contain grid grid-cols-1">
    <Header class="header" />
    <div class="main w-full flex justify-center items-start p-0">
      <slot />
    </div>
    <Footer class="footer" />
  </div>
</template>
<script lang="ts" setup>
import Footer from "@/components/layouts/Footer.vue";
import Header from "@/components/layouts/Header.vue";
</script>

<style>
.contain {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
     grid-template-columns: 100%;
}

/* Vùng layout */
.header {
  grid-area: header;
}

.section {
  grid-area: section;
  background-color: #f3f4f6;
  padding: 16px;
}
.aside {
  grid-area: aside;
  background-color: rgb(69, 14, 14);
  padding: 16px;
}
.main {
  grid-area: main;
  background: #f7f7f7;
}

.adventisment {
     grid-area: adventisment;
  background-color: rgb(255, 255, 255);
  padding: 16px;
}
.footer {
  grid-area: footer;
  background-color: #1f2937;
  color: white;
  padding: 16px;
}
</style>
