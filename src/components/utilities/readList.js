const getReadList = () => {
  const bookstr = localStorage.getItem("readList");

  if (bookstr) {
    const readBookss = JSON.parse(bookstr);
    // console.log(readBooks);
    return readBookss;
  } else {
    return [];
  }
};
const addReadList = (id) => {
  const readBooks = getReadList();
  // console.log(typeof readBooks);
  if (readBooks.includes(id)) {
    alert("Already existed");
  } else {
    readBooks.push(id);
    const data = JSON.stringify(readBooks);
    localStorage.setItem("readList", data);
  }
};

export { getReadList, addReadList };
