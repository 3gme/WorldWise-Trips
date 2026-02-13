export function convertToEmoji(countryCode = "") {
  const normalizedCode = countryCode.trim().toUpperCase();
  const codePoints = normalizedCode
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));

  return String.fromCodePoint(...codePoints);
}

export function getFlagEmoji(value = "") {
  return /^[a-z]{2}$/i.test(value) ? convertToEmoji(value) : value;
}
