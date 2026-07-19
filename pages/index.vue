<template>
  <div>
    <!-- Hero Section -->
    <Hero />
    
    <!-- Features -->
    <Features />
    
    <!-- How It Works -->
    <HowItWorks />
    
    <!-- Testimonials -->
    <Testimonials />
    
    <!-- Pricing -->
    <Pricing />
    
    <!-- FAQ -->
    <FAQ />
    
    <!-- CTA Banner -->
    <section class="gradient-primary py-20 mt-20">
      <div class="container-custom text-center text-white">
        <h2 class="text-4xl md:text-5xl font-heading font-bold mb-6">
          Siap Tingkatkan Bisnis Anda?
        </h2>
        <p class="text-xl opacity-90 max-w-2xl mx-auto mb-10">
          Mulai otomatisasi WhatsApp sekarang. Gratis 7 hari, tanpa kartu kredit.
        </p>
        <Button variant="secondary" size="lg" class="bg-white text-primary-500 hover:bg-gray-100">
          Mulai Sekarang — Gratis 7 Hari
        </Button>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from '~/components/sections/Hero.vue'
import Features from '~/components/sections/Features.vue'
import HowItWorks from '~/components/sections/HowItWorks.vue'
import Testimonials from '~/components/sections/Testimonials.vue'
import Pricing from '~/components/sections/Pricing.vue'
import FAQ from '~/components/sections/FAQ.vue'
import Button from '~/components/common/Button.vue'

useHead({
  title: 'RH BOT - Otomatisasi WhatsApp Cerdas untuk Bisnis'
})
</script>