import { REGEX_LINK_DOUYIN, REGEX_LINK_TIKTOK } from './contants';

export const isTiktokLink = (link: string): boolean => {
  return REGEX_LINK_TIKTOK.filter((item) => item.test(link)).length > 0;
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

export function nFormatter(num: number, digits: number) {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    // { value: 1e9, symbol: 'G' },
    // { value: 1e12, symbol: 'T' },
    // { value: 1e15, symbol: 'P' },
    // { value: 1e18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  if (!item) return '0';
  const fixed = (num / item.value).toFixed(digits);
  const vl = new Intl.NumberFormat('en-US', { maximumSignificantDigits: 6 }).format(Number(fixed));
  return item ? vl.replace(rx, '$1') + item.symbol : '0';
}
