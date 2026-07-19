<template>
  <div>
    <section class="pt-32 pb-20 bg-gray-50">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-primary-500 font-semibold text-sm uppercase tracking-wider">Blog</span>
          <h1 class="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">
            Artikel <span class="text-primary-500">Terbaru</span>
          </h1>
          <p class="text-gray-600 text-lg">
            Tips dan trik otomatisasi WhatsApp untuk bisnis Anda.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(post, index) in posts" :key="index" 
               class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="h-48 bg-gradient-to-br from-primary-500/20 to-secondary-400/20 flex items-center justify-center text-6xl">
              {{ post.emoji }}
            </div>
            <div class="p-6">
              <div class="text-sm text-primary-500 font-semibold mb-2">{{ post.date }}</div>
              <h3 class="text-xl font-bold mb-3">{{ post.title }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ post.excerpt }}</p>
              <NuxtLink to="#" class="text-primary-500 font-semibold hover:text-primary-600 transition-colors">
                Baca Selengkapnya →
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const posts = [
  {
    emoji: '📱',
    date: '18 Juli 2026',
    title: 'Cara Meningkatkan Penjualan dengan WhatsApp Automation',
    excerpt: 'Pelajari bagaimana otomatisasi WhatsApp bisa meningkatkan konversi penjualan bisnis Anda hingga 300%.'
  },
  {
    emoji: '🤖',
    date: '15 Juli 2026',
    title: 'Auto-Reply: Kunci Layanan Pelanggan 24/7',
    excerpt: 'Tidak perlu khawatir kehilangan pelanggan di luar jam kerja dengan fitur auto-reply cerdas.'
  },
  {
    emoji: '📊',
    date: '10 Juli 2026',
    title: 'Analitik Kampanye WhatsApp untuk Bisnis',
    excerpt: 'Gunakan data untuk mengoptimalkan strategi pemasaran Anda melalui WhatsApp.'
  }
]

useHead({
  title: 'Blog RH BOT - Tips Otomatisasi WhatsApp'
})
</script>