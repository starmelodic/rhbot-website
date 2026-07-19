<template>
  <footer class="bg-gray-900 text-gray-300 mt-20">
    <div class="container-custom py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              RH
            </div>
            <span class="text-2xl font-heading font-bold text-white">RH BOT</span>
          </div>
          <p class="text-gray-400 max-w-md leading-relaxed">
            Solusi otomatisasi WhatsApp cerdas untuk bisnis modern. Tingkatkan penjualan dan layanan pelanggan Anda 24/7.
          </p>
          <div class="flex gap-4 mt-6">
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors text-xl">
              📸
            </a>
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors text-xl">
              ▶️
            </a>
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors text-xl">
              🔗
            </a>
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors text-xl">
              🐦
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">Produk</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/features" class="hover:text-white transition-colors">Fitur</NuxtLink></li>
            <li><NuxtLink to="/pricing" class="hover:text-white transition-colors">Harga</NuxtLink></li>
            <li><a href="#" class="hover:text-white transition-colors">Integrasi</a></li>
            <li><a href="#" class="hover:text-white transition-colors">API</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">Perusahaan</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/about" class="hover:text-white transition-colors">Tentang</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:text-white transition-colors">Blog</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-white transition-colors">Kontak</NuxtLink></li>
            <li><a href="#" class="hover:text-white transition-colors">Karir</a></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {{ new Date().getFullYear() }} RH BOT — Dikelola oleh erhabot.com</p>
        <div class="flex gap-6 mt-4 md:mt-0">
          <a href="#" class="hover:text-gray-300 transition-colors">Kebijakan Privasi</a>
          <a href="#" class="hover:text-gray-300 transition-colors">Syarat & Ketentuan</a>
        </div>
      </div>
    </div>
  </footer>
</template>