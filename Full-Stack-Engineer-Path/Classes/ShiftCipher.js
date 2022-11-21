// Write class below
class ShiftCipher {
  constructor(num) {
    this.num = num;
  }
  encrypt(str) {
    const upperStr = str.toUpperCase();
    let encryptedStr = "";
    for (let i = 0; i < upperStr.length; i++) {
      let currChar = upperStr.charCodeAt(i);
      if (currChar >= 65 && currChar <= 90) {
        let nextCode = currChar + this.num;
        if (nextCode > 90) {
          nextCode -= 26;
        }
        let newChar = String.fromCharCode(nextCode);
        encryptedStr += newChar;
      } else {
        encryptedStr += upperStr[i];
      }
    }
    return encryptedStr;
  }

  decrypt(str) {
    let decryptedStr = "";
    for (let i = 0; i < str.length; i++) {
      let currChar = str.charCodeAt(i);
      if (currChar >= 65 && currChar <= 90) {
        let nextCode = currChar - this.num;
        if (nextCode < 65) {
          nextCode += 26;
        }
          let newChar = String.fromCharCode(nextCode).toLowerCase();
        decryptedStr += newChar;
      } else {
        decryptedStr += str[i];
      }
    }
    return decryptedStr;
  }
}

const cipher = new ShiftCipher(2);
cipher.encrypt("I love to code!");
cipher.decrypt("K <3 OA RWRRA");