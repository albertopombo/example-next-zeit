import { User } from '../model/user';
import fetch from 'isomorphic-unfetch';

const baseUrl = 'https://api.github.com/orgs/lemoncode';
const userCollectionUrl = `${baseUrl}/members`;

const users = [
  {
    id: 14540103,
    login: 'antonio06',
    avatar_url: 'https://avatars1.githubusercontent.com/u/14540103?v=4',
  },
  {
    id: 1457912,
    login: 'brauliodiez',
    avatar_url: 'https://avatars1.githubusercontent.com/u/1457912?v=4',
  },
];

export const getUsers = async (): Promise<User[]> => {
  // const response = await fetch(userCollectionUrl);
  // const data = await response.json();

  // return data.map(user => {
  //   return {
  //     id: user.id,
  //     login: user.login,
  //     avatar_url: user.avatar_url,
  //   };
  // });
  return users;
};