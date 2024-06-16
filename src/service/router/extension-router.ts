import { useEffect, useState } from 'react';
import { Router } from '../../application/port';

export const useExtensionRouter = (): Router => {
  const [currentUrl, setCurrentUrl] = useState<string>('');

  useEffect(() => {
    chrome.storage.local.get('url').then((data) => {
      data['url'] && setCurrentUrl(data['url']);
    });

    chrome.storage.onChanged.addListener((changes, namespace) => {
      if (namespace === 'local' && changes['url']) {
        const updatedPhase = changes['url'].newValue;
        setCurrentUrl(updatedPhase);
      }
    });
  }, []);

  const { pathname, searchParams } = parseUrl(currentUrl);

  return {
    pathname,
    searchParams,
    push: setUrlInChromeStorage,
  };
};

function setUrlInChromeStorage(url: string) {
  chrome.storage.local.set({
    ['url']: url,
  });
}

function parseUrl(url: string): {
  pathname: string;
  searchParams: Record<string, string>;
} {
  const [path, queryString] = url.split('?');
  const params: Record<string, string> = {};

  if (queryString) {
    queryString.split('&').forEach((param) => {
      const [key, value] = param.split('=');
      if (key && value) {
        params[key] = decodeURIComponent(value);
      }
    });
  }

  return {
    pathname: path,
    searchParams: params,
  };
}
