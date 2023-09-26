import { getDonateCard } from "../../utilities/fakedb";

const DonatesLoader = async () => {
  // const loadedDonates = await fetch("Donates.json");
  const loadedDonates = await fetch("../../../public/category.json");
  const Donates = await loadedDonates.json();

  // if Donate data is in database, you have to use async await
  const storedDonate = getDonateCard();
  // console.log(storedDonate);

  const savedDonate = [];

  for (const id in storedDonate) {
    const addedDonate = Donates.find((sd) => sd.id === id);
    if (addedDonate) {
      const quantity = storedDonate[id];
      addedDonate.quantity = quantity;
      savedDonate.push(addedDonate);
    }
  }

  // if you need to send two things
  // return [Donates, savedDonate]
  // another options
  // return { Donates, Donate: savedDonate }

  return savedDonate;
  // return Donates;
};

export default DonatesLoader;
