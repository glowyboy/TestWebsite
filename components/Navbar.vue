<template>
  <nav class="bg-bg w-full top-0 start-0">
    <div class="max-w-[1440px] mx-auto px-4 lg:px-4 flex flex-wrap items-center justify-between py-6">
      <!-- Logo -->
      <a href="#" class="flex items-center space-x-2 lg:ml-10">
        <img src="../assets/images/Logo.png" class="h-8" alt="Protech Logo">
        <span class="text-white text-[32px] font-bold leading-[110%] ">protech</span>
      </a>

      <!-- Buttons (Request Demo & Mobile Menu) -->
      <div class="flex md:order-2 space-x-3 lg:mr-4">
        <!-- Request Demo Button (Visible on md+ screens) -->
        <button 
          type="button" 
          class="hidden md:block border border-white mr-16 text-white px-6 py-2 rounded-lg transition hover:bg-white hover:text-[#650D66]">
          Request Demo
        </button>
        
        <!-- Mobile Menu Button -->
        <button @click="toggleMenu" type="button" class="md:hidden text-white">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <div class="items-center hidden md:flex md:w-auto md:order-1">
  <ul class="flex space-x-8 font-medium menu-text">
    <li class="relative group">
      <a href="#" class="flex items-center hover:opacity-75">
        Products
        <!-- SVG Image as source -->
        <img src="../assets/images/Vector.svg" alt="Icon" class="w-4 h-4 ml-2">
      </a>

      <!-- Dropdown Content -->
      <div class="absolute left-0 hidden group-hover:block mt-2 pl-6 bg-bg text-white text-left shadow-lg p-2 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <ul class="space-y-2">
          <li>Shoes</li>
          <li>Shirts</li>
          <li>Pants</li>
          <li>Accessories</li>
        </ul>
      </div>
    </li>

    <li><a href="#" class="hover:opacity-75">Solutions</a></li>
    <li><a href="#" class="hover:opacity-75">Resources</a></li>
    <li><a href="#" class="hover:opacity-75">Pricing</a></li>
  </ul>
</div>
</div>




    <!-- Mobile Overlay & Menu -->
    <div v-if="menuVisible" class="fixed inset-0 z-50 md:hidden">
      <!-- Background Overlay -->
      <div @click="toggleMenu" class="absolute inset-0 bg-black opacity-50"></div>

      <!-- Sliding Mobile Menu -->
      <div class="absolute right-0 top-0 h-full w-64 bg-[#650D66] shadow-lg p-5 transition-transform duration-300">
        <button @click="toggleMenu" class="absolute top-4 right-4 text-white">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul class="mt-12 space-y-4 text-white">
          <li><a @click="toggleMenu" href="#" class="block hover:opacity-75">Products</a></li>
          <li><a @click="toggleMenu" href="#" class="block hover:opacity-75">Solutions</a></li>
          <li><a @click="toggleMenu" href="#" class="block hover:opacity-75">Resources</a></li>
          <li><a @click="toggleMenu" href="#" class="block hover:opacity-75">Pricing</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const menuVisible = ref(false);
const toggleMenu = () => {
  menuVisible.value = !menuVisible.value;
};
</script>
