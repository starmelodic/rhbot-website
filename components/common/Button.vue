<template>
  <button 
    :class="[
      'relative font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 overflow-hidden',
      variantClasses[variant],
      sizeClasses[size],
      className
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (val) => ['primary', 'secondary', 'outline', 'ghost'].includes(val)
  },
  size: {
    type: String,
    default: 'md',
    validator: (val) => ['sm', 'md', 'lg'].includes(val)
  },
  className: {
    type: String,
    default: ''
  }
})

const variantClasses = {
  primary: 'bg-primary-500 text-white hover:bg-primary-600 active:scale-95',
  secondary: 'bg-secondary-400 text-white hover:bg-secondary-500 active:scale-95',
  outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white active:scale-95',
  ghost: 'text-primary-500 hover:bg-primary-50 active:scale-95'
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
}
</script>