<template>
  <router-link
    class="nfts-page-item"
    :to="{ name: $routes.vppNFTDetails, params: { id: props.title } }"
  >
    <div class="app-list-section-card__logo-container">
      <div class="app-list-section-card__logo-wrap">
        <div class="nfts-page-item__img-wrapper">
          <img class="nfts-page-item__img" alt="nft" :src="props.link" />
        </div>
      </div>
    </div>
    <div class="nfts-page-item__title-container">
      <span class="nfts-page-item__title" :title="props.title">
        {{ props.title }}
      </span>
      <svg
        @click.stop="copyToClipboard(props.title)"
        class="nfts-page-item__copy-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M10 1.5H4a1 1 0 0 0-1 1v10.5h1V2.5h6V1.5z"/>
        <path d="M11 3.5H5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.5a1 1 0 0 0-1-1z"/>
        <path d="M10.5 6a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h5z"/>
      </svg>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    title?: string
    link?: string
  }>(),
  {
    title: 'random',
    link: '',
  },
)

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    alert('Titel in die Zwischenablage kopiert!')
  } catch (err) {
    console.error('Fehler beim Kopieren: ', err)
    alert('Fehler beim Kopieren des Titels.')
  }
}
</script>

<style lang="scss" scoped>
.nfts-page-item {
  height: auto;
  display: flex;
  flex-direction: column;
  background: var(--white);
  box-shadow: toRem(6) toRem(6) toRem(8) var(--shadow-primary);
  padding: toRem(12);
  grid-gap: toRem(8);
  border-radius: toRem(8);
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
  }
}

.app-list-section-card__logo-container {
  position: relative;
  width: 100%;
}
.app-list-section-card__logo-wrap {
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-bottom: 0;
  height: 100%;
}

.nfts-page-item__img-wrapper {
  max-height: toRem(250);
  min-height: toRem(250);
  height: 100%;
}

.nfts-page-item__img {
  height: 100%;
  width: 100%;
  display: block;
  object-fit: contain;
  border-radius: inherit;
  background: var(--app-bg);
}

.nfts-page-item__title-container {
  display: flex;
  align-items: center;
  margin-top: toRem(12);
}

.nfts-page-item__title {
  font-weight: 600;
  color: var(--text-primary-main);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  margin-right: toRem(8);
}

.nfts-page-item__copy-icon {
  flex-shrink: 0;
  cursor: pointer;
  color: var(--text-secondary-main);
  transition: color 0.3s;

  &:hover {
    color: var(--text-primary-main);
  }
}

@media (max-width: 870px) {
  .nfts-page-item {
    padding: toRem(8);
  }

  .nfts-page-item__title {
    font-size: toRem(16);
  }
}
</style>
