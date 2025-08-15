import CryptoJS from 'crypto-js';

const ENCRYPTION_KEY = process.env.REACT_APP_ENCRYPTION_KEY;

if (!ENCRYPTION_KEY) {
  throw new Error('Encryption key not set (REACT_APP_ENCRYPTION_KEY)');
}

export const encryptData = data => {
  return CryptoJS.AES.encrypt(data, ENCRYPTION_KEY).toString();
};

export const decryptData = cipherText => {
  if (!cipherText || typeof cipherText !== 'string') return null;

  try {
    const bytes = CryptoJS.AES.decrypt(cipherText, ENCRYPTION_KEY);
    const utf8 = bytes.toString(CryptoJS.enc.Utf8);

    if (utf8) return utf8;

    return cipherText;
  } catch {
    return null;
  }
};
