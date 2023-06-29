import { defaultInstance, authInstance } from '../utils';

const BASE_URL = 'https://port-0-mini-backend-develop-1aac2alg6v5osh.sel3.cloudtype.app/';
// const BASE_URL = 'http://10.19.237.50:8080/';

// 인증이 필요없는 데이터 요청
export const getPost = async (channelId: any) => {
  try {
    const response = await defaultInstance.get(`${BASE_URL}${channelId}`);
    return response;
  } catch (error) {
    console.log(error);
    throw error; // 에러를 호출자에게 다시 던집니다.
  }
};

// 인증이 필요한 데이터 요청
export const createPost = async (data: any) => {
  try {
    await authInstance.post('posts/create', data);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id: any) => {
  try {
    await authInstance.delete('posts/delete', { data: id });
  } catch (error) {
    console.log(error);
  }
};
