import Vue from 'vue';
import Router from 'vue-router';
import ModelSelection from '@/components/ModelSelection';
import ModelSelected from '@/components/ModelSelected';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'model-selection',
      component: ModelSelection,
    },
    {
      path: '/a4',
      name: 'model-selected',
      component: ModelSelected,
    },
  ],
});
