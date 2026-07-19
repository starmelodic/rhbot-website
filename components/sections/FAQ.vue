<template>
  <section class="py-20 bg-gray-50">
    <div class="container-custom max-w-3xl mx-auto">
      <div class="text-center mb-16">
        <span class="text-primary-500 font-semibold text-sm uppercase tracking-wider">FAQ</span>
        <h2 class="text-4xl font-heading font-bold mt-2">
          Pertanyaan yang <span class="text-primary-500">Sering Diajukan</span>
        </h2>
      </div>
      
      <div class="space-y-4">
        <div v-for="(item, index) in faqs" :key="index"
             class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <button @click="item.isOpen = !item.isOpen"
                  class="w-full px-6 py-4 flex items-center justify-between text-left font-medium text-gray-800 hover:bg-gray-50 transition-colors">
            <span>{{ item.question }}</span>
            <span class="text-gray-500 text-xl flex-shrink-0 ml-4">
              {{ item.isOpen ? '▲' : '▼' }}
            </span>
          </button>
          <div v-show="item.isOpen" class="px-6 pb-4 text-gray-600 leading-relaxed">
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const faqs = ref([
  {
    question: 'Apakah RH BOT aman digunakan?',
    answer: 'Ya, RH BOT menggunakan enkripsi end-to-end dan mengikuti standar keamanan WhatsApp. Data Anda kami jaga kerahasiaannya.',
    isOpen: false
  },
  {
    question: 'Apakah ada masa percobaan gratis?',
    answer: 'Ya, kami menyediakan masa percobaan gratis selama 7 hari untuk semua paket. Tidak perlu kartu kredit untuk mencoba.',
    isOpen: false
  },
  {
    question: 'Apakah saya perlu kemampuan coding?',
    answer: 'Tidak sama sekali! RH BOT dirancang untuk semua orang. Antarmuka kami sangat mudah digunakan tanpa perlu coding.',
    isOpen: false
  },
  {
    question: 'Bagaimana cara menghubungkan WhatsApp?',
    answer: 'Cukup scan QR Code yang tersedia di dashboard RH BOT menggunakan WhatsApp Anda. Prosesnya cepat dan mudah.',
    isOpen: false
  },
  {
    question: 'Apakah bisa integrasi dengan sistem saya?',
    answer: 'Ya, kami menyediakan API yang bisa diintegrasikan dengan sistem Anda seperti CRM, e-commerce, dan lainnya.',
    isOpen: false
  }
])
</script>