<template>
  <div :class="['app-navbar', { 'app-navbar--menu-open': isMenuOpen }]">
    <app-logo class="app-navbar__logo" v-if="!isMenuOpen" />
    <div class="spacer" />

    <!-- Navigation für Desktop -->
    <nav class="navigation" v-if="!isMenuOpen">
      <ul>
        <li>
          <router-link :to="{ name: ROUTE_NAMES.blockchainBasics }">
            {{ $t('header.blockchain-basics') }}
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: ROUTE_NAMES.binex }">
            {{ $t('header.binex') }}
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: ROUTE_NAMES.vpp }">
            {{ $t('header.vpp-documentation') }}
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: ROUTE_NAMES.events }">
            {{ $t('header.events') }}
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Menü-Icon für Mobile -->
    <img
      :src="isMenuOpen ? CloseMenuIcon : OpenMenuIcon"
      alt="Menu Icon"
      class="menu-icon"
      @click="toggleMenu"
    />
  </div>

  <!-- Overlay-Menü -->
  <div class="mobile-menu" v-if="isMenuOpen">
    <nav class="mobile-navigation">
      <ul>
        <li>
          <router-link :to="{ name: ROUTE_NAMES.home }" @click="toggleMenu">
            {{ $t('header.start') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: ROUTE_NAMES.blockchainBasics }"
            @click="toggleMenu"
          >
            {{ $t('header.blockchain-basics') }}
          </router-link>
        </li>

        <li class="highlight-item">
          <div class="menu-item-with-button">
            <router-link
              :to="{ name: ROUTE_NAMES.binex }"
              class="menu-link"
              @click="toggleMenu"
            >
              {{ $t('header.binex') }}
            </router-link>
            <button class="instruction-button">
              {{ $t('header.guide') }}
            </button>
          </div>
        </li>

        <!-- Menüeintrag "VPP Documentation" mit Button -->
        <li class="highlight-item">
          <div class="menu-item-with-button">
            <router-link
              :to="{ name: ROUTE_NAMES.vpp }"
              class="menu-link"
              @click="toggleMenu"
            >
              {{ $t('header.vpp-documentation') }}
            </router-link>
            <button class="instruction-button">
              {{ $t('header.guide') }}
            </button>
          </div>
        </li>
        <li>
          <router-link :to="{ name: ROUTE_NAMES.events }" @click="toggleMenu">
            {{ $t('header.events') }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { AppLogo } from '@/common'
import { ROUTE_NAMES } from '@/enums'

import OpenMenuIcon from '@/assets/header-open-menu-icon.svg'
import CloseMenuIcon from '@/assets/header-close-icon.svg'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style lang="scss" scoped>
.app-navbar {
  display: flex;
  align-items: center;
  gap: toRem(10);
  padding: toRem(24) var(--app-padding-right) toRem(24) var(--app-padding-left);
  background: var(--app-bg);
  border-bottom: var(--border-primary-main);
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1001;
}

.app-navbar--menu-open {
  background-color: #090909;
}

.app-navbar__logo {
  width: toRem(40);
}

.spacer {
  flex: 1;
  height: 44.41px;
}

/* Navigation Styling */
.navigation ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.navigation a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
  display: block;
  padding: toRem(12) toRem(16);
  border-radius: 0;
}

.mobile-navigation .highlight-item a {
  background-color: var(--app-bg);
  color: #000000;
  border-radius: toRem(15);
  padding: toRem(12) toRem(10);
  font-size: toRem(20);
}

/* Flex-Container für Menüeintrag und Button */
.menu-item-with-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: toRem(6) toRem(10);
  border-radius: toRem(15);
}

/* Styling für den Menülink innerhalb des Flex-Containers */
.menu-item-with-button .menu-link {
  color: #000000;
  background-color: #ffffff;
  border-radius: toRem(15);
  padding: toRem(12) toRem(16);
  text-decoration: none;
  font-size: toRem(24);
  font-weight: bold;
  flex: 1;
}

/* Styling für den Button */
.instruction-button {
  border: 1px solid #000000;
  border-radius: toRem(10);
  background: transparent;
  color: #000000;
  padding: toRem(2) toRem(16);
  font-size: toRem(16);
  cursor: pointer;
  margin-left: toRem(8);
}

/* Anpassungen für die hervorgehobenen Elemente */
.mobile-navigation .highlight-item {
  background-color: #ffffff;
  border-radius: toRem(15);
  margin-left: toRem(24);
  margin-right: toRem(24);
  padding: 0;
}

.mobile-navigation .highlight-item a.menu-link {
  background: none;
  padding: 0;
  border-radius: 0;
}

/* Menu Icon Styling */
.menu-icon {
  width: toRem(24);
  height: toRem(24);
  cursor: pointer;
  display: none;
}

/* Responsives Design */
@media (max-width: 767px) {
  .navigation {
    display: none;
  }

  .menu-icon {
    display: block;
  }
}

/* Mobile Menu Overlay */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #090909;
  z-index: 1000;
  overflow-y: auto;
}

.mobile-navigation {
  margin-top: toRem(90);
}

.mobile-navigation ul {
  list-style: none;
  padding: 0;
}

.mobile-navigation li {
  margin: toRem(20) 0;
  text-align: left;
  padding: 0 toRem(24);
}

.mobile-navigation a {
  text-decoration: none;
  color: #ffffff;
  font-size: toRem(20);
  font-weight: bold;
}
</style>
