<template>
  <section class="pt-32 pb-20">
    <div class="container-custom max-w-2xl">
      <h1 class="text-5xl font-heading font-bold mb-8">Hubungi Kami</h1>
      <form class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Nama</label>
          <input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input type="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
          <textarea rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"></textarea>
        </div>
        <Button variant="primary" size="lg" class="w-full">Kirim Pesan</Button>
      </form>
    </div>
  </section>
</template>

<script setup>
import Button from '~/components/common/Button.vue'
</script>