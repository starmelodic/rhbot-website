<template>
  <section class="py-20 bg-gray-50" id="features">
    <div class="container-custom">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-primary-500 font-semibold text-sm uppercase tracking-wider">Fitur Unggulan</span>
        <h2 class="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">
          Semua yang Anda Butuhkan untuk <br />
          <span class="gradient-primary bg-clip-text text-transparent">Otomatisasi WhatsApp</span>
        </h2>
        <p class="text-gray-600 text-lg">
          RH BOT menyediakan fitur lengkap untuk membantu bisnis Anda berkomunikasi lebih efektif dengan pelanggan.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(feature, index) in features" :key="index" 
             class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl card-hover border border-gray-100">
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/10 to-secondary-400/10 flex items-center justify-center mb-6 text-3xl">
            {{ feature.emoji }}
          </div>
          <h3 class="text-xl font-bold mb-3">{{ feature.title }}</h3>
          <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    emoji: '💬',
    title: 'Broadcast Massal',
    description: 'Kirim pesan ke ribuan kontak sekaligus dengan personalisasi. Hemat waktu dan tenaga.'
  },
  {
    emoji: '✨',
    title: 'Auto-Reply Cerdas',
    description: 'Balas pesan otomatis dengan kata kunci tertentu. Pelanggan tidak perlu menunggu lama.'
  },
  {
    emoji: '📊',
    title: 'Dashboard Analitik',
    description: 'Pantau performa kampanye Anda dengan grafik dan laporan real-time yang mudah dipahami.'
  },
  {
    emoji: '⏰',
    title: 'Penjadwalan Pesan',
    description: 'Atur jadwal pengiriman pesan otomatis. Kirim di waktu yang tepat untuk hasil maksimal.'
  },
  {
    emoji: '👥',
    title: 'Manajemen Kontak',
    description: 'Kelompokkan kontak berdasarkan segmen untuk kampanye yang lebih terarah dan personal.'
  },
  {
    emoji: '🔌',
    title: 'Integrasi API',
    description: 'Hubungkan RH BOT dengan sistem Anda melalui API. Fleksibel untuk berbagai kebutuhan.'
  }
]
</script>