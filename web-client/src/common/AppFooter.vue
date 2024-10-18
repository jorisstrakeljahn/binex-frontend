<template>
  <section class="news-section">
    <h2 class="news-section__title">
      {{ t('footer.newsTitle') }}
    </h2>
    <div class="news-section__list">
      <router-link
        v-for="(event, index) in events"
        :key="index"
        :to="event.link"
        class="news-card"
      >
        <div class="news-card__header">
          <h3 class="news-card__title">
            {{ event.title }}
          </h3>
          <span class="news-card__date">{{ event.date }}</span>
        </div>
        <p class="news-card__description">
          {{ event.description }}
        </p>
      </router-link>
    </div>
  </section>

  <!-- Footer-Bereich -->
  <section class="footer-section">
    <div class="footer-content">
      <div class="footer-column">
        <h3 class="footer-title">
          {{ t('footer.footerTitle') }}
        </h3>
        <p class="footer-text">
          {{ t('footer.footerText') }}
        </p>
      </div>
      <div class="footer-column">
        <h3 class="footer-title">
          {{ t('footer.contactTitle') }}
        </h3>
        <p class="footer-text">
          {{ t('footer.contactPerson') }}
        </p>
        <p class="footer-text">
          {{ t('footer.contactPhone') }}
        </p>
        <p class="footer-text">
          {{
            t('footer.contactEmail', {
              account: 'ak-krypto',
              domain: 'hsbi.de',
            })
          }}
        </p>
      </div>
    </div>
    <div class="footer-links">
      <a
        href="https://www.hsbi.de/impressum"
        class="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ t('footer.impressum') }}
      </a>
      <span class="footer-separator">|</span>
      <a
        href="https://www.hsbi.de/datenschutzerklaerung"
        class="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ t('footer.datenschutz') }}
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const events = [
  {
    title: 'Binex',
    description: 'NFT-Oberfläche ist online und kann genutzt werden',
    date: '12.10.24',
    link: '/binex',
  },
  {
    title: 'Vortrag Cashlink',
    description:
      'Frau Dr. Jennifer Milinovic spricht über die Tokenisierung von Wertpapieren',
    date: '13.11.24, 14 Uhr',
    link: '/events/cashlink',
  },
]
</script>

<style lang="scss" scoped>
/* Neuigkeiten und Termine Sektion */
.news-section {
  padding: 2rem 1rem;

  &__title {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }
}

.news-card {
  padding: 1rem;
  box-sizing: border-box;
  width: calc(50% - 4rem);
  position: relative;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: #9e9e9e 0 2px 4px 0;
  transition: transform 0.3s ease;
  margin: 1rem;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
  }

  &__date {
    font-size: 1rem;
    color: #000;
  }

  &__description {
    line-height: 1.5rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #000;
  }

  &:hover {
    transform: scale(1.05);
  }
}

/* Footer-Bereich */
.footer-section {
  background-color: #000;
  color: #fff;
  padding: 2rem 1rem;

  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-column {
    flex: 1 1 45%;
    margin-bottom: 1rem;
    text-align: center;
  }

  .footer-title {
    color: #d9d9d9;
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }

  .footer-text {
    color: #d9d9d9;
    font-size: 1.3rem;
    margin: 0.25rem 0;
  }

  .footer-links {
    text-align: center;
    margin-top: 1rem;

    .footer-link {
      color: #fff;
      text-decoration: none;
      margin: 0 0.5rem;
    }

    .footer-separator {
      color: #fff;
      margin: 0 0.5rem;
    }
  }
}

/* Responsive Anpassungen */
@media (max-width: 768px) {
  .news-card {
    width: 100%;
  }

  .news-card__title {
    font-size: 1.2rem;
  }

  .news-card__date {
    font-size: 1rem;
  }

  .news-card__description {
    font-size: 1rem;
  }

  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .footer-column {
    flex: 1 1 100%;
    text-align: center;
  }

  .footer.footer-section {
    .footer-title {
      font-size: 1rem;
    }

    .footer-text {
      font-size: 0.8rem;
    }
  }
}
</style>
