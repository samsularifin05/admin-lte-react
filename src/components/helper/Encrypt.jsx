const encryptascii = (str) => {
  let key = "b3r4sput1h";
  let isencryt = process.env.REACT_APP_ENC;

  let dataKey = {};
  for (let i = 0; i < key.length; i++) {
    dataKey[i] = key.substr(`${i}`, 1);
  }

  let strEnc = "";
  let nkey = 0;
  let jml = str.length;

  for (let i = 0; i < parseInt(jml); i++) {
    strEnc =
      strEnc + hexEncode(str[i].charCodeAt(0) + dataKey[nkey].charCodeAt(0));

    if (nkey === Object.keys(dataKey).length - 1) {
      nkey = 0;
    }
    nkey = nkey + 1;
  }
  return isencryt === "1" ? strEnc.toUpperCase() : str;
};

const decryptascii = (str) => {
  let isencryt = process.env.REACT_APP_ENC;

  if (str !== null) {
    let key = "b3r4sput1h";
    let dataKey = {};
    for (let i = 0; i < key.length; i++) {
      dataKey[i] = key.substr(`${i}`, 1);
    }

    let strDec = "";
    let nkey = 0;
    let jml = str.length;
    let i = 0;
    while (i < parseInt(jml)) {
      strDec =
        strDec + chr(hexdec(str.substr(i, 2)) - dataKey[nkey].charCodeAt(0));
      if (nkey === Object.keys(dataKey).length - 1) {
        nkey = 0;
      }
      nkey = nkey + 1;
      i = i + 2;
    }
    return isencryt === "1" ? strDec : str;
  }
};

const hexEncode = (str) => {
  var result = "";
  result = str.toString(16);
  return result;
};

const hexdec = (hex) => {
  var str = "";
  str = parseInt(hex, 16);
  return str;
};
const chr = (asci) => {
  var str = "";
  str = String.fromCharCode(asci);
  return str;
};

export function doEncrypt(dataBeforeCopy, ignore = []) {
  if (!dataBeforeCopy) {
    return dataBeforeCopy;
  }
  if (typeof dataBeforeCopy === "object" && !(dataBeforeCopy instanceof Date)) {
    const data = Array.isArray(dataBeforeCopy)
      ? [...dataBeforeCopy]
      : { ...dataBeforeCopy };
    Object.keys(data).map((x) => {
      const result = ignore.find((find) => find === x);
      if (!result) {
        if (Array.isArray(data[x])) {
          data[x] = data[x].map((y, i) => {
            if (typeof y === "string") {
              return encryptascii(y);
            } else if (
              typeof data[x] === "object" &&
              data[x] &&
              !(data[x] instanceof Date)
            ) {
              return doEncrypt(y, ignore);
            }
            return false;
          });
        } else {
          if (typeof data[x] === "string" && data[x]) {
            data[x] = encryptascii(data[x]);
          } else if (typeof data[x] === "number" && data[x]) {
            // Call Masking Number
          } else if (
            typeof data[x] === "object" &&
            data[x] &&
            !(dataBeforeCopy instanceof Date)
          ) {
            data[x] = doEncrypt(data[x], ignore);
          }
        }
      }
      return false;
    });
    return data;
  } else if (typeof dataBeforeCopy === "string") {
    const data = encryptascii(dataBeforeCopy);
    return data;
  }
}

export function doDecrypt(dataBeforeCopy, ignore = []) {
  if (!dataBeforeCopy) {
    return dataBeforeCopy;
  }

  if (typeof dataBeforeCopy === "object" && !(dataBeforeCopy instanceof Date)) {
    const data = Array.isArray(dataBeforeCopy)
      ? [...dataBeforeCopy]
      : { ...dataBeforeCopy };
    Object.keys(data).map((x) => {
      const result = ignore.find((find) => find === x);
      if (!result) {
        if (Array.isArray(data[x])) {
          data[x] = data[x].map((y, i) => {
            if (typeof y === "string") {
              return decryptascii(y);
            } else if (
              typeof data[x] === "object" &&
              data[x] &&
              !(data[x] instanceof Date)
            ) {
              return doDecrypt(y, ignore);
            }
            return false;
          });
        } else {
          // Real Encrypt
          if (typeof data[x] === "string" && data[x]) {
            data[x] = decryptascii(data[x]);
          } else if (typeof data[x] === "number" && data[x]) {
            // Call Unmasking Number()
          } else if (
            typeof data[x] === "object" &&
            data[x] &&
            !(dataBeforeCopy instanceof Date)
          ) {
            data[x] = doDecrypt(data[x], ignore);
          }
        }
      }
      return false;
    });
    return data;
  } else if (typeof dataBeforeCopy === "string") {
    const data = decryptascii(dataBeforeCopy);
    return data;
  }
}
