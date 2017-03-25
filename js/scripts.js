var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
	maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
	allNames = femaleNames.concat(maleNames);

if (allNames.indexOf(newName) === -1) {
  newName = allNames.push('Marian');
}

allNames;
