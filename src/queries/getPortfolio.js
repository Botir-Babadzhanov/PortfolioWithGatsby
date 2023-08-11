import { collection, getDocs, store } from "core/configs/firebase";

const getPortfolioList = () => {
  const ref = collection(store, "portfolio");
  return getDocs(ref).then((snapshots) => {
    return snapshots.docs.map((item) => item.data());
  });
};

export { getPortfolioList };
