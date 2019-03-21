export default function(data) {
  const numbers = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
    ".": ".",
    "-": "-"
  };
  let result = "";
  let input = data.toString();

  if (isNaN(parseFloat(data)) || isNaN(data - 0)) {
    return "প্রদানকৃত তথ্যটি সংখ্যা নয়";
  }

  for (let i = 0; i < input.length; i++) {
    result += numbers[input[i]];
  }
  return result;
}
