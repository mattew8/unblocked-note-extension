type KeyType = 'posts';

export const chromeStorage = {
  async get(key: KeyType): Promise<unknown> {
    const data = await chrome.storage.local.get(key);
    return data[key] || null;
  },

  create(key: KeyType, value: unknown) {
    return chrome.storage.local.set({
      [key]: value,
    });
  },
};
