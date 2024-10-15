<template>
  <div class="accordion-item">
    <div class="accordion-item__header" @click="toggle">
      <span class="accordion-item__title">{{ title }}</span>
      <span class="accordion-item__icon">
        {{ isOpen ? t('accordion-item.open') : t('accordion-item.open') }}
      </span>
    </div>
    <div v-if="isOpen" class="accordion-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'accordion-item',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false)

    const toggle = () => {
      isOpen.value = !isOpen.value
    }

    const { t } = useI18n()

    return {
      isOpen,
      toggle,
      t,
    }
  },
})
</script>

<style scoped>
.accordion-item {
  border-bottom: 1px solid #ccc;
  max-width: 1000px;
  width: 100%;
}

.accordion-item__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 1rem 0;
}

.accordion-item__title {
  font-size: 1rem;
  font-weight: 500;
  color: #000000;
}

.accordion-item__icon {
  font-size: 1.5rem;
}

.accordion-item__content {
  padding: 0.5rem 0;
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .accordion-item__icon {
    font-size: 1.2rem;
  }
}
</style>
