let validUserName = (username) => {
	const alphabet = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	];
	const otherAcceptedCharacters = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'0',
		'-',
		'_',
	];
	const totalAcceptedCharacters = alphabet.concat(otherAcceptedCharacters);
	const scrubbedInput = username.trim().split('');
	if (scrubbedInput.length < 8 || scrubbedInput.length > 12) {
		console.log(1);
		return false;
	} else if (!alphabet.includes(scrubbedInput[0])) {
		console.log(2);
		return false;
	}
	for (let character of scrubbedInput) {
		if (!totalAcceptedCharacters.includes(character)) {
			console.log(character);
			console.log(3);
			return false;
		}
	}
	return true;
};

console.log(validUserName('username'));
