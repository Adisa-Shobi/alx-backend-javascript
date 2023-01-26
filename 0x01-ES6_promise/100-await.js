import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo = await uploadPhoto().catch(() => { photo = null; });
  let user = await createUser().catch(() => { user = null; });
  return { photo, user };
}
