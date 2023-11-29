export const list_sorter = (list, number) => {
  const list_split = list.split(/[\r\n]+/);
  const list_shuffle = shuffle(list_split);
  if (number > 1) {
    const list_chunks = splitToNChunks(list_shuffle, number);
    const result = [];
    list_chunks.forEach((a) => {
      let group = "";
      a.forEach((e) => {
        group += e + ", ";
      });
      result.push(group);
    });
    console.log(result, list_chunks);
    return result;
  } else {
    let result = [list_shuffle.join(", ")]
    return result;
  }
};

export const copy_sorted = async (result) => {
  let copy = "";
  result.forEach((r, i) => {
    copy += `Group ${i + 1}\n` + r + "\n";
  });
  try {
    await navigator.clipboard.writeText(copy);
    return true;
  } catch (error) {
    return false;
  }
};

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
function splitToNChunks(array, n) {
  let result = [];
  for (let i = n; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}
