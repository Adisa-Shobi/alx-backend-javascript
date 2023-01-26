import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let firstName; let lastName; let
    body;
  uploadPhoto()
    .then((resolve) => {
      body = resolve.body;
      return createUser();
    })
    .then((resolve) => {
      firstName = resolve.firstName;
      lastName = resolve.lastName;
      console.log(body, firstName, lastName);
    })
    .catch(() => { console.log('Signup system offline'); });
}
