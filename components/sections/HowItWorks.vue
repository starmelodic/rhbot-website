<template>
  <section class="py-20 bg-white">
    <div class="container-custom">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-primary-500 font-semibold text-sm uppercase tracking-wider">Cara Kerja</span>
        <h2 class="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">
          Mulai Otomatisasi dalam
          <span class="text-secondary-400">3 Langkah</span>
        </h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <!-- Connector line -->
        <div class="hidden md:block absolute top-1/4 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-400"></div>
        
        <div v-for="(step, index) in steps" :key="index" class="text-center relative">
          <div class="relative z-10">
            <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-400 flex items-center justify-center text-white text-3xl font-bold shadow-xl shadow-primary-500/30 mb-6">
              {{ index + 1 }}
            </div>
            <h3 class="text-xl font-bold mb-3">{{ step.title }}</h3>
            <p class="text-gray-600 max-w-xs mx-auto">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: 'Daftar Akun',
    description: 'Buat akun RH BOT gratis dalam 2 menit. Tidak perlu kartu kredit.'
  },
  {
    title: 'Hubungkan WhatsApp',
    description: 'Sambungkan nomor WhatsApp Anda dengan mudah melalui QR Code.'
  },
  {
    title: 'Mulai Kirim Pesan',
    description: 'Buat kampanye, atur jadwal, dan pantau hasilnya di dashboard.'
  }
]
</script>