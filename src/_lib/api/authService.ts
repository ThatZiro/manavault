import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/auth/login`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const sighupUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/auth/signup`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response;
  } catch(error) {
    console.log(error);
  }
}

export const forgotPassword = async (email: string) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/auth/forgot-password`,
      { email },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response;
  } catch(error) {
    console.log(error);
  }
}

export const resetPassword = async (token: string, password: string) => {
  try {
    console.log(`Reseting password to ${password} using ${token}`);
    const response = await axios.post(
      `${API_URL}/api/auth/reset-password`,
      { token, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response;
  } catch(error) {
    console.log(error);
  }
}
