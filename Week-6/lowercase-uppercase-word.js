function detectWord(sen) {
	let word = sen.match(/[a-z]/g);

    return word.join('');
}
