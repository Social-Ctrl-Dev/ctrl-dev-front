import { Api } from '../providers';

const getRegisterUrl = () => Api.get('/auth/register');

const loginWithToken = async (access_token: string): Promise<string> => {
  try {
    const response = await Api.post(
      '/auth/login',
      {},
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
    return JSON.stringify(response.data);
  } catch (error) {
    return JSON.stringify(error);
  }
};

async function loginWithEmail(email: string, password: string) {
  try {
    const response = await Api.post('/auth/login', { email, password });

    if (response.data.result === null) {
      alert(response.data.message);
      return 'error';
    } else {
      localStorage.setItem('infoUser', JSON.stringify(response.data.result));
      return 'ok';
    }
  } catch (error) {
    alert('Error al iniciar sesión, por favor intente de nuevo');
    return 'error';
  }
}

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

async function userLogout() {
  localStorage.removeItem('access_token');
  localStorage.removeItem('infoUsuario');
  window.location.assign('/');
}

export const UserServices = {
  getRegisterUrl,
  loginWithToken,
  loginWithEmail,
  callRegisterUrl,
  userLogout,
};
