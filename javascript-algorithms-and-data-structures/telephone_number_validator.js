function telephoneCheck(str) {
    let format1 = /^(1\s)?[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/g;
    let format2 = /^(1)?\([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/g;
    let format3 = /^(1\s)?\([0-9]{3}\)\s[0-9]{3}\-[0-9]{4}$/g;
    let format4 = /^[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/g;
    let format5 = /^[0-9]{10}$/g
    let format6 = /^1\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/g
    let formats = [format1, format2, format3, format4, format5, format6];

    for (let i = 0; i < formats.length; i++) {
      if (formats[i].test(str)) {
        return true;
      }
    }
    return false;
}
