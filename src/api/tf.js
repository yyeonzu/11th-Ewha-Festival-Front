import TfService from './service/tfservice';
import { RequestLogout } from './auth';

export const GetAllNotice = async () => {
  try {
    const response = await TfService.getAllNotice();
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error, '모든 공지 조회 실패');
  }
};

export const GetNotice = async noticeId => {
  try {
    const response = await TfService.getNotice(noticeId);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error, '공지 상세 조회 실패');
  }
};

export const DeleteNotice = async noticeId => {
  try {
    const response = await TfService.deleteNotice(noticeId);
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      '이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다'
    ) {
      RequestLogout();
    }
    return Promise.reject(error, '공지 삭제 실패');
  }
};

export const SubmitNotice = async (noticeId, title, content) => {
  try {
    const response = await TfService.postNotice(noticeId, title, content);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error, '공지 작성 실패');
  }
};

export const PatchNotice = async (id, title, content) => {
  try {
    const response = await TfService.putNotice(id, title, content);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error, '공지 수정 실패');
  }
};
