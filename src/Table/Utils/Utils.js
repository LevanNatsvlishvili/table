export function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
}

export function arrayMove(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);

};

export const Search = (array, value) => {
  return array.find(({ id }) => id === value)
}

export const searchInArray = (cells, value) => {
  if (!value) return true;

  let contains = false;
  cells.map((cell) => {
    if (typeof cell[1] === 'string') {
      if (cell[1].toLowerCase().includes(value.toLowerCase())) {
        contains = true;
      }
    }

    if (typeof cell[1] === 'number') {
      if (cell[1].toString().toLowerCase().includes(value.toLowerCase())) {
        contains = true;
      }
    }
    return true;
  })

  if (contains) return true;

  return false;
}