<template>
  <section class="py-20 bg-white" id="pricing">
    <div class="container-custom">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-primary-500 font-semibold text-sm uppercase tracking-wider">Harga</span>
        <h2 class="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">
          Pilih Paket yang <span class="text-primary-500">Tepat</span> untuk Anda
        </h2>
        <p class="text-gray-600 text-lg">
          Mulai dari Rp 99.000/bulan. Semua paket sudah termasuk fitur lengkap.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div v-for="(plan, index) in plans" :key="index"
             :class="[
               'bg-white rounded-2xl p-8 border shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl',
               plan.popular ? 'border-secondary-400 shadow-xl relative' : 'border-gray-200'
             ]">
          <div v-if="plan.popular" class="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Paling Populer
          </div>
          <h3 class="text-xl font-bold text-gray-800">{{ plan.name }}</h3>
          <div class="mt-4 mb-6">
            <span class="text-5xl font-heading font-bold text-gray-900">Rp {{ plan.price }}</span>
            <span class="text-gray-500">/bulan</span>
          </div>
          <p class="text-gray-600 text-sm mb-6">{{ plan.description }}</p>
          <ul class="space-y-3 mb-8">
            <li v-for="(feature, fIndex) in plan.features" :key="fIndex" class="flex items-start gap-3 text-sm">
              <span class="text-secondary-400 text-xl">✅</span>
              <span>{{ feature }}</span>
            </li>
          </ul>
          <Button :variant="plan.popular ? 'secondary' : 'outline'" class="w-full" :class="plan.popular ? '' : 'hover:bg-primary-500 hover:text-white'">
            {{ plan.cta }}
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from '~/components/common/Button.vue'

const plans = [
  {
    name: 'Starter',
    price: '99.000',
    description: 'Cocok untuk pemula yang baru mulai bisnis online',
    features: [
      '1000 pesan/bulan',
      '5 kontak grup',
      'Auto-reply dasar',
      'Support email',
      'Dashboard basic'
    ],
    cta: 'Mulai Sekarang',
    popular: false
  },
  {
    name: 'Pro',
    price: '299.000',
    description: 'Solusi lengkap untuk bisnis yang berkembang pesat',
    features: [
      '10.000 pesan/bulan',
      '50 kontak grup',
      'Auto-reply cerdas',
      'Support 24/7',
      'Dashboard advanced',
      'Integrasi API',
      'Analitik real-time'
    ],
    cta: 'Mulai Sekarang',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '699.000',
    description: 'Untuk perusahaan besar dengan kebutuhan khusus',
    features: [
      'Tak terbatas pesan',
      'Kontak tak terbatas',
      'Auto-reply AI',
      'Dedicated support',
      'Custom dashboard',
      'Integrasi penuh',
      'White-label option'
    ],
    cta: 'Hubungi Kami',
    popular: false
  }
]
</script>