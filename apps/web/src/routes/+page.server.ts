// import type { PageServerLoad } from './$types';
import { PRIVATE_TEST_ENV_VAR } from '$env/static/private';

export const load = async () => {
  console.log(PRIVATE_TEST_ENV_VAR);

  return { envvar: PRIVATE_TEST_ENV_VAR };
};
