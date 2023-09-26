// use local storage to manage Job data
const addToDb = (id) => {
  let DonateCard = getDonateCard();
  // add quantity
  const quantity = DonateCard[id];
  if (!quantity) {
    DonateCard[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    DonateCard[id] = newQuantity;
  }
  localStorage.setItem("donate-card", JSON.stringify(DonateCard));
};

const removeFromDb = (id) => {
  const DonateCard = getDonateCard();
  if (id in DonateCard) {
    delete DonateCard[id];
    localStorage.setItem("donate-card", JSON.stringify(DonateCard));
  }
};

const getDonateCard = () => {
  let DonateCard = {};

  //get the Donate-Card Donate from local storage
  const storedJob = localStorage.getItem("donate-card");
  if (storedJob) {
    DonateCard = JSON.parse(storedJob);
  }
  return DonateCard;
};

const deleteDonateCard = () => {
  localStorage.removeItem("donate-card");
};

export { addToDb, removeFromDb, getDonateCard, deleteDonateCard };
