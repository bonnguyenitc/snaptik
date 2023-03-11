import { REGEX_LINK_DOUYIN, REGEX_LINK_TIKTOK } from './contants';

export const isTiktokLink = (link: string): boolean => {
  return REGEX_LINK_TIKTOK.test(link);
};

export const isDouyinLink = (link: string): boolean => {
  return REGEX_LINK_DOUYIN.test(link);
};

export const getIdVideo = (link: string): string => {
  const strSplit = link.split('/video/');
  return strSplit[1];
};

export const getInfoVideo = async (link: string) => {
  try {
    const data = await fetch(`https://www.tiktok.com/oembed?url=${link}`, {
      method: 'GET',
    });
    const dataJson = await data.json();
    return dataJson;
  } catch (error) {
    return null;
  }
};

export const getUrlRequest = (link: string, onProgress: (value: string) => void) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', link, true);
    xhr.responseType = 'blob';
    xhr.onprogress = function (e) {
      if (e.lengthComputable) {
        const percentComplete = (e.loaded / e.total) * 100;
        onProgress(percentComplete.toFixed(2) + '%');
      } else {
        onProgress('0%');
      }
    };
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.response);
      }
    };
    xhr.onerror = function () {
      reject(null);
    };
    xhr.send();
  });
};
