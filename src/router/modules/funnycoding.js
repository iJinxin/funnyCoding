/* funnycoding module */

import Layout from '@/views/layout/Layout'

const funnyCodingRouter = {
  path: '/funnycoding',
  component: Layout,
  redirect: '/funnycoding/barrage',
  children: [
    {
      path: 'barrage',
      name: 'Barrage',
      component: () => import('@/views/funnycoding/Barrage')
    },
    {
      path: 'waterfall',
      name: 'Waterfall',
      component: () => import('@/views/funnycoding/Waterfall')
    }
  ]
}

export default funnyCodingRouter