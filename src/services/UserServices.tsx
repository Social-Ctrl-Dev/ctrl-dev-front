import { Api } from '../providers';

const getRegisterUrl = () => Api.get('/auth/register');

const loginWithToken = (token: string) => Api.post('/auth/login', { token });

const loginWithEmail = (email: string, password: string) =>
  Api.post('/auth/login', { email, password });

async function callRegisterUrl() {
  const { status, data } = await UserServices.getRegisterUrl();
  if (status === 200) {
    console.log('data', data);
    const urlForRegister: string = data.result.url;
    window.location.assign(urlForRegister);
  } else {
    alert('Error al obtener la url de registro');
  }
}

export const UserServices = {
  getRegisterUrl,
  loginWithToken,
  loginWithEmail,
  callRegisterUrl,
};
