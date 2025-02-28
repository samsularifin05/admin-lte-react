import { doEncrypt, doDecrypt } from "./encrypt";

export const getItem = (nama) => {
  if (typeof window !== "undefined") {
    const encryptedKey = doEncrypt(nama);
    const item = localStorage.getItem(encryptedKey);
    return item === null ? [] : doDecrypt(JSON.parse(item || "[]"));
  }
};

export const setItem = (nama, data) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(doEncrypt(nama), JSON.stringify(doEncrypt(data)));
  }
};

export const removeItem = (nama) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(doEncrypt(nama));
  }
};
