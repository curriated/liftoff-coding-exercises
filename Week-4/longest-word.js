function LongestWord(sen) {
    let senArr = sen.match(/[a-z0-9]+/gi);

    let sortArr = senArr.sort(function(a,b) {
        return b.length - a.length;
    });

    return sortArr[0];

  };

  //regex: /gi is for case-insensitive
  //regex: a-z0-9 will only include letters a-z and numbers 0-9 in the match
