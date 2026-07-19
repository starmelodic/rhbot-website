<template>
  <section class="py-20 bg-gray-50">
    <div class="container-custom">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-primary-500 font-semibold text-sm uppercase tracking-wider">Testimoni</span>
        <h2 class="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">
          Apa Kata <span class="text-primary-500">Klien</span> Kami
        </h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(testimonial, index) in testimonials" :key="index" 
             class="bg-white rounded-2xl p-8 shadow-sm card-hover border border-gray-100">
          <div class="flex items-center gap-1 mb-4">
            <span v-for="i in 5" :key="i" class="text-yellow-400 text-xl">★</span>
          </div>
          <p class="text-gray-700 leading-relaxed mb-6">"{{ testimonial.text }}"</p>
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-400 flex items-center justify-center text-white font-bold text-lg">
              {{ testimonial.name.charAt(0) }}
            </div>
            <div>
              <p class="font-bold text-gray-800">{{ testimonial.name }}</p>
              <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'Andi Wijaya',
    role: 'CEO, Toko Makmur',
    text: 'RH BOT benar-benar mengubah cara kami berkomunikasi dengan pelanggan. Kirim promo jadi lebih mudah dan cepat!'
  },
  {
    name: 'Siti Rahma',
    role: 'Owner, Cake Shop',
    text: 'Auto-reply-nya sangat membantu. Pelanggan langsung dapat respons, bahkan di luar jam kerja. Rekomendasi!'
  },
  {
    name: 'Budi Santoso',
    role: 'Digital Marketer',
    text: 'Dashboard analitiknya lengkap. Saya bisa lihat mana kampanye yang paling efektif. Sangat direkomendasikan!'
  }
]
</script>