import { Loader } from "components";
import { Empty } from "components/emptyPage";
import { GlobalContext } from "context/globalContext";
import { axiosInstance } from "core/api";
import { centToDollar, getDate } from "core/utils";
import React from "react";
import { Card, Count, DonateList, Header, Name } from "./styled";

const DonateCards = ({ isSuccess }) => {
  const { settings, saveSettings } = React.useContext(GlobalContext);
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const getDonationList = async () => {
      try {
        const { data } = await axiosInstance.get("/payment_list");
        if (data) {
          setLoading(false);
          if (data.success) {
            saveSettings(data.list);
          }
        }
      } catch (error) {
        console.log("Error: ", error);
        setLoading(false);
      }
    };

    getDonationList();
  }, [isSuccess]);

  if (isLoading) return <Loader />;
  return (
    <DonateList>
      {settings ? (
        settings.map((item) => {
          return (
            <Card key={item.id}>
              <Header>
                <Name>{centToDollar(item.amount)} ❤</Name>
                <Count>{getDate(item.created)}</Count>
              </Header>
            </Card>
          );
        })
      ) : (
        <Empty>There are currently no donations</Empty>
      )}
    </DonateList>
  );
};

export { DonateCards };
