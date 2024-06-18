import { Router } from '../port';

export async function routeToPostList(router: Router) {
  router.push('post/list');
}

export async function routeToPostCreate(router: Router) {
  router.push('post/create');
}
