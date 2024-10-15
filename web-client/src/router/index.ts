import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  useRoute,
  useRouter,
} from 'vue-router'
import { ROUTE_NAMES } from '@/enums'
import { useWeb3ProvidersStore } from '@/store'
import { storeToRefs } from 'pinia'

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
    component: () => import('@/pages/VPPDocPage'),
  },
  {
    path: '/vpp/nfts',
    name: ROUTE_NAMES.vppNFTs,
    component: () => import('@/pages/NftsPage'),
    meta: { requiresMetaMask: true },
  },
  {
    path: '/vpp/nfts/:id',
    name: ROUTE_NAMES.vppNFTDetails,
    component: () => import('@/pages/NftDetailsPage'),
    meta: { requiresMetaMask: true },
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
  {
    path: '/connect',
    name: 'ConnectPage',
    component: () => import('@/pages/ConnectPage/ConnectPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0, left: 0 }),
})

router.beforeEach(async (to, from, next) => {
  const web3ProvidersStore = useWeb3ProvidersStore()
  const { provider, isValidChain } = storeToRefs(web3ProvidersStore)

  // Wenn die Route eine MetaMask-Verbindung erfordert
  if (to.meta.requiresMetaMask) {
    if (!provider.value.isConnected || !isValidChain.value) {
      next({ name: 'ConnectPage', query: { redirect: to.fullPath } })
    } else {
      next()
    }
  } else {
    next()
  }
})

export { router, useRouter, useRoute }
