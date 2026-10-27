<template>
  <svg class="logomark" viewBox="0 0 48 48" :width="size" :height="size" aria-hidden="true">
    <rect x="6"  y="22" width="10" height="21" rx="2" fill="#f07d1c"/>
    <rect x="18" y="10" width="12" height="33" rx="2" fill="#fff"/>
    <rect x="32" y="26" width="9"  height="17" rx="2" fill="#f07d1c"/>
    <g fill="#0c1220">
      <rect x="21" y="16" width="6" height="2.4" rx="1.2"/>
      <rect x="21" y="22" width="6" height="2.4" rx="1.2"/>
      <rect x="21" y="28" width="6" height="2.4" rx="1.2"/>
      <rect x="21" y="34" width="6" height="2.4" rx="1.2"/>
    </g>
    <path d="M36.5 3 l1.5 3.4 3.4 1.5 -3.4 1.5 -1.5 3.4 -1.5 -3.4 -3.4 -1.5 3.4 -1.5 Z" fill="#f07d1c"/>
  </svg>
</template>

<script setup>
defineProps({
  size: { type: [Number, String], default: 38 }
})
</script>
