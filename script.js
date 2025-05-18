function firstWord(s) {
  s = s.trimStart();
  const spaceIndex = s.indexOf(' ');

  if (spaceIndex === -1) {
    return s;
  }

  return s.substring(0, spaceIndex);
}

const s = prompt("Enter String:");
alert(firstWord(s));
