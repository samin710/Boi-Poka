const getWishList = () => {
  const wishDatastr = localStorage.getItem("WishList");
  if (wishDatastr) {
    const wishData = JSON.parse(wishDatastr);
    return wishData;
  } else {
    return [];
  }
};
const addWishList = (id) => {
  const getdata = getWishList();
  if (getdata.includes(id)) {
    alert("Already existed");
  } else {
    getdata.push(id);
    const data = JSON.stringify(getdata);
    localStorage.setItem("WishList", data);
  }
};
export { getWishList, addWishList };
