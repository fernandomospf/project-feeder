import femaleUser from '../assets/userFemale.svg';
import maleUser from '../assets/userMale.svg';

export const randomImageUser = () => {
  const imageForLogin = {
    1: femaleUser,
    2: maleUser,
  };
  const random = Math.round(Math.random() * (2 - 1) + 1);
  return random === 1 ? imageForLogin[random] : imageForLogin[random]
};