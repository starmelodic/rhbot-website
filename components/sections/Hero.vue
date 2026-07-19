<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background dengan efek parallax -->
    <div class="absolute inset-0 gradient-hero">
      <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div class="absolute top-1/4 -left-1/4 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-float animation-delay-200"></div>
    </div>
    
    <div class="container-custom relative pt-32 pb-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <div class="inline-flex items-center gap-3 glass px-5 py-2.5 rounded-full text-white/90 text-sm font-medium animate-fade-up">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary-400"></span>
            </span>
            Platform Otomatisasi #1 di Indonesia
          </div>
          
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight animate-fade-up animation-delay-100">
            Kirim 
            <span class="gradient-text bg-gradient-to-r from-secondary-400 to-accent-400">10.000 Pesan</span>
            <br />WhatsApp Otomatis
            <br />dalam 1 Klik
          </h1>
          
          <p class="text-xl text-white/70 max-w-lg leading-relaxed animate-fade-up animation-delay-200">
            RH BOT siap membantu bisnis Anda merespon pelanggan 24/7 dengan otomatisasi WhatsApp yang cerdas dan mudah digunakan.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <Button variant="secondary" size="lg" class="shadow-2xl shadow-secondary-400/30 group">
              🚀 Mulai Sekarang — Gratis 7 Hari
              <Icon name="heroicons:arrow-right-20-solid" class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" class="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
              <Icon name="heroicons:play-20-solid" class="w-5 h-5 mr-2" />
              Lihat Demo
            </Button>
          </div>
          
          <div class="flex items-center gap-8 text-sm text-white/60 animate-fade-up animation-delay-400">
            <div class="flex items-center gap-2.5">
              <Icon name="heroicons:check-circle-20-solid" class="w-5 h-5 text-secondary-400" />
              <span>Gratis 7 hari</span>
            </div>
            <div class="flex items-center gap-2.5">
              <Icon name="heroicons:check-circle-20-solid" class="w-5 h-5 text-secondary-400" />
              <span>Tanpa kartu kredit</span>
            </div>
            <div class="flex items-center gap-2.5">
              <Icon name="heroicons:check-circle-20-solid" class="w-5 h-5 text-secondary-400" />
              <span>Dukungan 24/7</span>
            </div>
          </div>
        </div>
        
        <!-- Right: Chat Interface -->
        <div class="relative animate-float">
          <div class="relative glass rounded-3xl p-6 shadow-2xl shadow-black/20">
            <!-- Chat Messages -->
            <div class="space-y-4">
              <div class="flex items-start gap-3 animate-fade-up animation-delay-100">
                <div class="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg shadow-primary-500/20">
                  RH
                </div>
                <div class="glass rounded-2xl px-5 py-3 text-white/90 text-sm max-w-[85%] leading-relaxed backdrop-blur-sm">
                  Halo! Ada yang bisa saya bantu? 😊
                </div>
              </div>
              
              <div class="flex items-start gap-3 justify-end animate-fade-up animation-delay-200">
                <div class="glass rounded-2xl px-5 py-3 text-white/90 text-sm max-w-[85%] leading-relaxed backdrop-blur-sm border border-white/10">
                  Saya mau order produk, masih ada?
                </div>
                <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/80 text-sm flex-shrink-0 border border-white/10">
                  👤
                </div>
              </div>
              
              <div class="flex items-start gap-3 animate-fade-up animation-delay-300">
                <div class="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg shadow-primary-500/20">
                  RH
                </div>
                <div class="glass rounded-2xl px-5 py-3 text-white/90 text-sm max-w-[85%] leading-relaxed backdrop-blur-sm">
                  Tentu! Stok masih ada 50 pcs. Mau saya bantu pesan? 🛒
                </div>
              </div>
            </div>
            
            <!-- Typing Indicator -->
            <div class="mt-4 flex items-start gap-3">
              <div class="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg shadow-primary-500/20">
                RH
              </div>
              <div class="glass rounded-2xl px-5 py-3 backdrop-blur-sm">
                <div class="flex gap-1.5">
                  <span class="w-2.5 h-2.5 bg-white/60 rounded-full animate-bounce" style="animation-delay: 0s"></span>
                  <span class="w-2.5 h-2.5 bg-white/60 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
                  <span class="w-2.5 h-2.5 bg-white/60 rounded-full animate-bounce" style="animation-delay: 0.4s"></span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Floating Stats -->
          <div class="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-xl rounded-2xl px-5 py-3 shadow-xl animate-fade-up animation-delay-500 border border-white/20">
            <div class="flex items-center gap-4">
              <div class="text-center">
                <div class="text-2xl font-bold text-primary-500">10K+</div>
                <div class="text-xs text-gray-500">Pesan Terkirim</div>
              </div>
              <div class="w-px h-10 bg-gray-200"></div>
              <div class="text-center">
                <div class="text-2xl font-bold text-secondary-400">98%</div>
                <div class="text-xs text-gray-500">Kepuasan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce hidden lg:block">
      <Icon name="heroicons:chevron-down-20-solid" class="w-8 h-8" />
    </div>
  </section>
</template>

<script setup>
import Button from '~/components/common/Button.vue'
</script>