<template>
  <div class="font-poppins">
    <div class="max-w-[1280px] w-full mx-auto bg-[#F8F9FF]">
      <section class="bg-[#F8D57E] max-w-[1280px] mx-auto px-6 pt-4 pb-0 font-sans min-h-[570px]">
        <!-- Navbar -->
        <div class="flex justify-between items-center mb-10">
          <div class="flex items-center gap-2 text-black font-bold text-xl ml-8">
            <img src="../../assets/images/Tv.png" />
            <img src="../../assets/images/TvTxt.png" class="mt-1.5 xl:block hidden" />
          </div>
          <div class="hidden md:flex gap-4 items-center text-sm font-medium">
            <a href="#" class="text-[#009379] mr-10 font-semibold">Contact</a>
            <a href="#" class="flex items-center justify-center gap-2 px-5 py-4 w-[162px] text-[#009379] h-[47px] bg-[#E5F4F2] rounded-2xl font-semibold">
              How it works
            </a>
            <a href="#" class="flex items-center justify-center gap-2 px-5 py-4 w-[171px] h-[47px] bg-[#009379] text-white rounded-2xl font-semibold">
              <img src="../../assets/images/RocketLaunch.png" />
              Get Started
            </a>
          </div>
          <!-- Mobile button -->
          <div class="md:hidden">
            <a href="#" class="flex items-center justify-center gap-2 px-5 py-4 w-[201px] h-[50px] bg-[#009379] text-white rounded-2xl font-semibold">
              Get Started
              <img src="../../assets/images/ArrowRight.svg" />
            </a>
          </div>
        </div>
    
        <!-- Hero Section -->
        <div class="text-center md:text-left flex flex-col md:flex-row items-center gap-10 ml-8">
          <!-- Text Content -->
          <div class="flex-1">
            <h1 class="text-5xl sm:text-6xl font-extrabold text-[#2D2D2D] leading-tight text-left px-4">
  Create Engaging<br />Landing Pages
</h1>

            <p class="mt-4 text-[#2D2D2D] text-lg max-w-[620px] ml-5">
              Build beautiful landing pages in record time with
              <a href="#" class="text-blue-600 underline">Anima</a>'s Landing Page UI kit for Figma. No code required!
            </p>
    
            <!-- Buttons -->
            <div class="mt-6 ml-5 flex flex-col sm:flex-row md:flex-row gap-4 sm:gap-6 justify-center sm:justify-center md:justify-start items-center sm:items-center md:items-start">
              <a href="#" class="flex items-center justify-center gap-2 px-12 py-4 w-[221px] h-[55px] bg-[#009379] text-white rounded-2xl font-semibold">
                <img src="../../assets/images/RocketLaunch.png" />
                Get Started
              </a>
              <a href="#" class="flex items-center justify-center gap-2 px-12 py-4 w-[202px] h-[55px] text-[#009379] bg-white border-1 border-[#009379] rounded-2xl font-semibold">
                How it works
              </a>
            </div>
          </div>
    
 <!-- Phone Image -->
<div class=" mx-auto mt-33 mr-15">
  <img src="../../assets/images/Mockup.png" 
       alt="Phone Mockup" 
       class="w-full max-h-[45vh] object-contain" />
</div>

        </div>
      </section>


<!-- Outer wrapper to center everything -->
<div class="w-full max-w-screen-xl mx-auto px-6">
  <div class="flex flex-col-reverse lg:flex-row items-center gap-10 mt-20">
    <!-- Left Image (Phone) -->
    <div class="flex-shrink-0">
      <img src="../../assets/images/Visuals.png" alt="Visual" class="mx-auto lg:mx-0 mt-30" />
    </div>

<!-- Feature Grid -->
<div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mr-5">

<!-- Title & Description Block -->
<div class="col-span-1 sm:col-span-2 flex flex-col px-4 
            items-start text-left 
            max-[746px]:items-center max-[746px]:text-center mt-20">
  
  <h1 class="text-3xl md:text-4xl font-extrabold text-[#2D2D2D] leading-tight">
    Our features
  </h1>

  <p class="mt-4 text-[#2D2D2D] text-xl max-w-[500px] max-[746px]:text-center">
    Few good reasons why you should use Anima Landing Page UI Kit to make your own pages.
  </p>
</div>


<!-- Feature Cards -->
<div class="flex items-center p-6 bg-white w-full rounded-3xl">
  <img src="../../assets/images/ufo1.png" class="w-12 h-16 mr-4">
  <p class="text-lg text-[#2D2D2D]">Fast building</p>
</div>

<div class="flex items-center p-6 bg-white w-full rounded-3xl">
  <img src="../../assets/images/ufo2.png" class="w-12 h-16 mr-4">
  <p class="text-lg text-[#2D2D2D]">Easy to edit</p>
</div>

<div class="flex items-center p-6 bg-white w-full rounded-3xl">
  <img src="../../assets/images/ufo3.png" class="w-12 h-16 mr-4">
  <p class="text-lg text-[#2D2D2D]">Responsiveness</p>
</div>

<div class="flex items-center p-6 bg-white w-full rounded-3xl">
  <img src="../../assets/images/ufo4.png" class="w-12 h-16 mr-4">
  <p class="text-lg text-[#2D2D2D]">No code needed</p>
</div>
</div>

</div>
</div>


<section class="py-16 px-4">
  <!-- Header -->
  <div class="text-center mb-12 mt-20">
    <h2 class="text-3xl md:text-4xl font-extrabold text-[#2D2D2D] mb-4">Discover our latest work</h2>
    <p class="text-[#4B4B4B] max-w-xl mx-auto ">
      Explore our portfolio and see the latest and greatest projects that  brought to life.
    </p>
  </div>

  <!-- Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10 max-w-7xl mx-auto mt-24 px-5">
    <!-- Card -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden">
      <div class="h-84 w-full">
        <img src="../../assets/images/mountain.png" alt="Project Image" class="w-full h-full object-cover" />
      </div>
      <div class="p-4">
        <h3 class="text-[24px] leading-[130%] font-semibold text-[#2D2D2D] tracking-[-0.01em] w-[310px] h-[50px] font-poppins">
  Project Title
</h3>
        <p class="text-sm text-[#4B4B4B]  text-[17px]">Short Description</p>
        <p class="text-xs text-gray-500 mt-7 text-[17px]">Category</p>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden">
      <div class="h-84 w-full">
        <img src="../../assets/images/mountain.png" alt="Project Image" class="w-full h-full object-cover" />
      </div>
      <div class="p-4">
        <h3 class="text-[24px] leading-[130%] font-semibold text-[#2D2D2D] tracking-[-0.01em] w-[310px] h-[50px] font-poppins">
  Project Title
</h3>           <p class="text-sm text-[#4B4B4B]  text-[17px]">Short Description</p>
<p class="text-xs text-gray-500 mt-7 text-[17px]">Category</p>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="bg-white rounded-2xl shadow-md overflow-hidden">
      <div class="h-84 w-full">
        <img src="../../assets/images/mountain.png" alt="Project Image" class="w-full h-full object-cover" />
      </div>
      <div class="p-4">
        <h3 class="text-[24px] leading-[130%] font-semibold text-[#2D2D2D] tracking-[-0.01em] w-[310px] h-[52px] font-poppins">
  Project Title
</h3>
<p class="text-sm text-[#4B4B4B]  text-[17px]">Short Description</p>
<p class="text-xs text-gray-500 mt-7 text-[17px]">Category</p>
      </div>
    </div>
  </div>
</section>


<section class="bg-[#F8D57E] py-22 px-4 mt-30">
  <div class="text-center mb-10 mt-4">
    <h2 class="text-2xl md:text-3xl font-extrabold font-bold">Real Stories from Satisfied Customers</h2>
    <p class="mt-2 text-gray-700">See how our landing page UI kit is making an impact.</p>
  </div>

  <div class="flex flex-col md:flex-row md:justify-center md:space-x-6 space-y-6 md:space-y-0 max-w-6xl mx-auto">

    <!-- Testimonial 1 -->
    <div class="bg-white p-6 rounded-2xl shadow-md w-full md:w-[48%] lg:w-[45%] 
                flex flex-row items-center 
                max-[374px]:flex-col max-[374px]:space-y-3">
      <!-- Avatar + Info -->
      <div class="flex flex-col items-center text-center md:w-1/3 px-2">
        <img src="../../assets/images/Lauren1.png" alt="Lauren M." class="w-20 h-20 rounded-full mb-3">
        <p class="font-bold text-lg">Lauren M.</p>
        <p class="text-gray-500 text-sm">UI Designer @Bloo</p>
      </div>
      <!-- Stars + Testimonial -->
      <div class="md:w-2/3 px-4 text-center md:text-left">
        <div class="flex justify-center md:justify-start text-yellow-500 text-lg mb-2">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <p class="text-sm text-gray-600">
          "Animo’s Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently."
        </p>
      </div>
    </div>

    <!-- Testimonial 2 -->
    <div class="bg-white p-6 rounded-2xl shadow-md w-full md:w-[48%] lg:w-[45%] 
                flex flex-row items-center 
                max-[374px]:flex-col max-[374px]:space-y-3">
      <!-- Avatar + Info -->
      <div class="flex flex-col items-center text-center md:w-1/3 px-2">
        <img src="../../assets/images/David.png" alt="David B." class="w-20 h-20 rounded-full mb-3">
        <p class="font-bold text-lg">David B.</p>
        <p class="text-gray-500 text-sm">Lead Designer @Creative</p>
      </div>
      <!-- Stars + Testimonial -->
      <div class="md:w-2/3 px-4 text-center md:text-left">
        <div class="flex justify-center md:justify-start text-yellow-500 text-lg mb-2">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <p class="text-sm text-gray-600">
          "The Landing Page UI Kit has been a game changer. The pre-designed components and templates have helped us deliver projects faster!"
        </p>
      </div>
    </div>

  </div>
</section>




    <!-- Team Section -->
    <section class="bg-gray-50 py-12 px-4">
      <div class="text-center mb-10 mt-15">
        <h2 class="text-2xl md:text-3xl font-extrabold font-bold">Meet our team</h2>
        <p class="mt-2 text-gray-700 mt-6">Get to know the faces behind the scenes and learn about the values that drive us.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-18">
        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <img src="../../assets/images/Sarah.png" alt="Sarah K." class="w-16 h-16 rounded-full mx-auto mb-4">
          <h3 class="font-bold">Sarah K.</h3>
          <p class="text-sm text-gray-500 mb-2">Lead Designer</p>
          <p class="text-sm text-gray-600 mb-4 mt-13">With a passion for color and a love for clean lines, Sarah brings all our wildest design dreams to life.</p>
          <div class="flex flex-wrap justify-center text-sm text-blue-600 mt-7 gap-x-11 gap-y-2 max-[640px]:text-center">
  <a href="#" class="text-[#009379]">Twitter</a>
  <a href="#" class="text-[#009379]">Dribbble</a>
  <a href="#" class="text-[#009379]">LinkedIn</a>
</div>

        </div>

        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <img src="../../assets/images/Micheal.png" alt="Michael I." class="w-16 h-16 rounded-full mx-auto mb-4">
          <h3 class="font-bold">Michael I.</h3>
          <p class="text-sm text-gray-500 mb-2">Product Designer</p>
          <p class="text-sm text-gray-600 mb-4 mt-13">Michael got a sharp eye for detail and the ability to turn any boring interface into a work of art.</p>
          <div class="flex flex-wrap justify-center text-sm text-blue-600 mt-7 gap-x-11 gap-y-2 max-[640px]:text-center">
  <a href="#" class="text-[#009379]">Twitter</a>
  <a href="#" class="text-[#009379]">Dribbble</a>
  <a href="#" class="text-[#009379]">LinkedIn</a>
</div>

        </div>

        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <img src="../../assets/images/Lauren2.png" alt="Lauren M." class="w-16 h-16 rounded-full mx-auto mb-4">
          <h3 class="font-bold">Lauren M.</h3>
          <p class="text-sm text-gray-500 mb-2">UX Designer</p>
          <p class="text-sm text-gray-600 mb-4 mt-7">Lauren is the mastermind behind all the seamless user experiences you love. She’s a wizard at making things intuitive.</p>
          <div class="flex flex-wrap justify-center text-sm text-blue-600 mt-7 gap-x-11 gap-y-2 max-[640px]:text-center">
  <a href="#" class="text-[#009379]">Twitter</a>
  <a href="#" class="text-[#009379]">Dribbble</a>
  <a href="#" class="text-[#009379]">LinkedIn</a>
</div>

        </div>
      </div>
    </section>





    <div class=" text-center px-4 py-12 space-y-16">
      <section class="bg-gray-50 py-12 px-4 text-center overflow-hidden">
  <h2 class="text-3xl sm:text-4xl font-bold mb-4 font-extrabold">More than 50 Integrations</h2>
  <p class="text-base text-gray-600 mb-12">We integrate with more than 50 apps you use daily</p>

  <!-- Row 1: 6 icons -->
  <div class="icon-row flex justify-center gap-6 sm:gap-4 md:gap-2 flex-wrap">
    <img src="../../assets/images/Logo11.svg" class="integration-icon" alt="Integration 1" />
    <img src="../../assets/images/1.svg" class="integration-icon" alt="Integration 2" />
    <img src="../../assets/images/2.svg" class="integration-icon" alt="Integration 3" />
    <img src="../../assets/images/3.svg" class="integration-icon" alt="Integration 4" />
    <img src="../../assets/images/4.svg" class="integration-icon" alt="Integration 5" />
    <img src="../../assets/images/5.svg" class="integration-icon" alt="Integration 6" />
  </div>

  <!-- Row 2: 5 icons -->
  <div class="icon-row flex justify-center gap-6 sm:gap-4 md:gap-2 flex-wrap">
    <img src="../../assets/images/7.svg" class="integration-icon" alt="Integration 7" />
    <img src="../../assets/images/8.svg" class="integration-icon" alt="Integration 8" />
    <img src="../../assets/images/9.svg" class="integration-icon" alt="Integration 9" />
    <img src="../../assets/images/10.svg" class="integration-icon" alt="Integration 10" />
    <img src="../../assets/images/_Client logo mark.png " class="integration-icon" alt="Integration 11" />
  </div>

  <!-- Row 3: 4 icons -->
  <div class="icon-row flex justify-center gap-6 sm:gap-4 md:gap-2 flex-wrap">
    <img src="../../assets/images/12.svg" class="integration-icon" alt="Integration 12" />
    <img src="../../assets/images/13.svg" class="integration-icon" alt="Integration 13" />
    <img src="../../assets/images/14.svg" class="integration-icon" alt="Integration 14" />
    <img src="../../assets/images/15.svg" class="integration-icon" alt="Integration 15" />
  </div>

  <button class="bg-[#009379] hover:bg-emerald-700 text-white px-10 py-3 rounded-lg text-base font-semibold">
    View All Integrations
  </button>
</section>


<section class="flex flex-col bg-[#F8D57E]">
    <!-- Main content -->
    <div class="flex-grow px-4 pt-12">
      <div class="text-center mb-8">
        <h1 class=" font-extrabold max-w-[1280px] h-auto font-poppins font-bold text-[28px] sm:text-[35px] md:text-[42px] leading-[120%] sm:leading-[125%] md:leading-[130%] text-center tracking-[-0.02em] text-[#2D2D2D] mx-auto">
  Get Landing Page UI Kit Today!
</h1>


        <p class="mt-4 text-gray-800">
          Break Figma limits and explore the endless possibilities with Anima.
        </p>

        <!-- Centered Button -->
        <div class="mt-6 flex justify-center">
          <a href="#" class="flex items-center justify-center gap-2 px-5 py-3 w-[190px] h-[52px] bg-[#009379] text-white rounded-2xl font-semibold">
            <img src="../../assets/images/RocketLaunch.png" class="w-4 h-4" />
            Get Started
          </a>
        </div>
      </div>

      <!-- Image directly above footer -->
      <div class="flex justify-center">
        <picture>
          <source srcset="../../assets/images/image-desktop.png" media="(min-width: 1280px)" />
          <source srcset="../../assets/images/image-tablet.png" media="(min-width: 747px)" />
          <img src="../../assets/images/image-mobile.png" alt="Landing Visual" class="w-full max-w-5xl rounded-lg shadow-md" />
        </picture>
      </div>
    </div>

    <footer class="bg-gray-900 text-white text-sm py-6 px-4">
  <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
    
    <!-- Text left on all screens -->
    <p class="text-left">© 2023 Anima’s Landing Page UI Kit.</p>

    <!-- Icons: above text (mobile), right side (desktop) -->
    <div class="flex gap-3 md:gap-5 mr-10 md:justify-end">
      <!-- Social icons -->
      <img src="../../assets/images/icon1.png" alt="Icon 1"class="w-9 h-9" />
<img src="../../assets/images/icon2.png" alt="Icon 2" class="w-9 h-9" />
<img src="../../assets/images/icon3.png" alt="Icon 3" class="w-9 h-9" />
<img src="../../assets/images/icon4.png" alt="Icon 4" class="w-9 h-9" />

    </div>

  </div>
</footer>


  </section>
  </div>








    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";


</script>


  <style>
    .integration-icon {
      width: clamp(7rem, 6vw, 5rem);  /* Auto-shrinks on small screens */
      height: auto;
    }
    .icon-row {
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      gap: clamp(7.55rem, 2vw, 2rem);
      
      margin-bottom: 2rem;
      padding: 0 1rem;
    }
  </style>