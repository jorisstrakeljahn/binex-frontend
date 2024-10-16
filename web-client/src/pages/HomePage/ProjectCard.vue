<template>
  <router-link :to="{ name: routeName }" class="project-card">
    <img :src="imageSrc" :alt="title" class="project-card__image" />
    <h3 class="project-card__title">
      {{ title }}
    </h3>
    <p class="project-card__description">
      {{ description }}
    </p>
  </router-link>
</template>

<script lang="ts">
export default {
  name: 'project-card',
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    routeName: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.project-card {
  display: block;
  flex: 1 1 calc(33.333% - 2rem);
  box-sizing: border-box;
  max-width: 300px;
  margin: 2rem;
  transition: transform 0.2s;

  &__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }

  &__title {
    font-size: 1.4rem;
    margin-top: 0.5rem;
  }

  &__description {
    font-size: 1rem;
    margin-top: 0.4rem;
    line-height: 1.5rem;
  }

  &:hover {
    transform: scale(1.05);
  }
}

/* Media Queries für kleinere Bildschirme */
@media (max-width: 1024px) {
  .project-card {
    flex: 1 1 calc(50% - 2rem);
  }

  .project-card__title {
    font-size: 1.2rem;
  }

  .project-card__description {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .project-card {
    flex: 1 1 calc(100% - 2rem);
  }
}
</style>
