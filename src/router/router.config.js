import { Layout } from '@/components/layout/index'


const routes = [
  {
    path: '/',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: () => import('@/view/index/index.vue'),
        meta: { title: '首页' }
      }
    ]
  },
]

export default routes