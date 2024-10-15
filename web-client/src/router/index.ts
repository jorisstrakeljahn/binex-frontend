import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  useRoute,
  useRouter,
} from 'vue-router'

import { ROUTE_NAMES } from '@/enums'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: { name: ROUTE_NAMES.home },
  },
  {
    path: '/',
    name: ROUTE_NAMES.home,
    component: () => import('@/pages/HomePage'),
  },
  {
    path: '/blockchain-basics',
    name: ROUTE_NAMES.blockchainBasics,
    component: () => import('@/pages/BlockchainBasicsPage'),
  },
  {
    path: '/binex',
    name: ROUTE_NAMES.binex,
    component: () => import('@/pages/BinexPage'),
  },
  {
    path: '/events',
    name: ROUTE_NAMES.events,
    component: () => import('@/pages/EventsPage'),
  },
  {
    path: '/vpp',
    name: ROUTE_NAMES.vpp,
    component: () => import('@/pages/VppDocPage'),
  },
  {
    path: '/vpp/nfts',
    name: ROUTE_NAMES.vppNFTs,
    component: () => import('@/pages/NftsPage'),
  },
  {
    path: '/vpp/nfts/:id',
    name: ROUTE_NAMES.vppNFTDetails,
    component: () => import('@/pages/NftDetailsPage'),
  },
  {
    path: '/imprint',
    name: ROUTE_NAMES.imprint,
    component: () => import('@/pages/ImprintPage'),
  },
  {
    path: '/privacy',
    name: ROUTE_NAMES.privacy,
    component: () => import('@/pages/PrivacyPage'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0, left: 0 }),
})

export { router, useRouter, useRoute }
