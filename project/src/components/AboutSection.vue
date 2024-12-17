<template>
  <section class="relative py-20 overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-100">
      <!-- Animated Patterns -->
      <div class="absolute inset-0 opacity-10">
        <div class="batik-pattern animate-float-slow"></div>
        <div class="batik-pattern-2 animate-float-medium"></div>
        <div class="batik-pattern-3 animate-float-fast"></div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container relative mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <!-- Logo Section -->
            <div class="w-full md:w-1/3" data-aos="zoom-in">
              <div class="relative">
                <div class="absolute inset-0 bg-amber-500/10 rounded-full animate-pulse"></div>
                <img 
                  src="/images/jabarkultur.png" 
                  alt="Jabar Kultur Logo" 
                  class="w-64 h-64 mx-auto relative z-10 animate-float hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            <!-- Content Section -->
            <div class="w-full md:w-2/3 space-y-8">
              <div class="space-y-6" data-aos="fade-up" data-aos-delay="100">
                <h2 class="text-4xl font-bold text-amber-800 relative">
                  Tentang Jabar Kultur
                  <span class="absolute bottom-0 left-0 w-20 h-1 bg-amber-500"></span>
                </h2>
                <p class="text-gray-700 leading-relaxed text-lg">
                  Selamat datang di Jabar Kultur, platform digital yang dirancang untuk 
                  melestarikan dan memperkenalkan kekayaan budaya Jawa Barat. 
                  Kami berkomitmen untuk menjaga tradisi, kesenian, dan adat istiadat 
                  agar tetap relevan dan dikenal generasi muda.
                </p>
                <p class="text-gray-700 leading-relaxed text-lg">
                  Melalui website ini, kami berharap dapat menjadi jembatan antara 
                  warisan budaya lokal dan dunia modern. Mari bersama-sama merawat 
                  dan membanggakan budaya kita!
                </p>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animasi Floating */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: float 8s ease-in-out infinite;
}

.animate-float-medium {
  animation: float 6s ease-in-out infinite;
}

.animate-float-fast {
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Background Patterns */
.batik-pattern,
.batik-pattern-2,
.batik-pattern-3 {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
}

.batik-pattern-2 {
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.15'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  animation-delay: -2s;
}

.batik-pattern-3 {
  background-image: url("data:image/svg+xml,%3Csvg width='48' height='32' viewBox='0 0 48 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.15'%3E%3Cpath d='M27 32c0-3.314 2.686-6 6-6 5.523 0 10-4.477 10-10S38.523 6 33 6c-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 6.627 0 12 5.373 12 12s-5.373 12-12 12c-2.21 0-4 1.79-4 4h-2zm-6 0c0-3.314-2.686-6-6-6-5.523 0-10-4.477-10-10S9.477 6 15 6c3.314 0 6-2.686 6-6h-2c0 2.21-1.79 4-4 4C8.373 4 3 9.373 3 16s5.373 12 12 12c2.21 0 4 1.79 4 4h2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  animation-delay: -4s;
}
</style>
