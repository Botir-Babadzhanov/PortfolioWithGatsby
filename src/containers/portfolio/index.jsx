import { HeaderComponent } from "components";
import React from "react";
import { getPortfolioList } from "queries";
import { URL } from "core/constants/urls";
import { Loader } from "components";
import { PortfolioCard } from "./card";
import { List, Wrapper } from "./styled";

const PortfolioContainer = () => {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    const getData = async () => {
      const response = await getPortfolioList();
      if (response) {
        setData(response);
      }
    };

    getData();
  }, []);

  return (
    <Wrapper>
      <HeaderComponent title="Portfolio" linkText="go back" link={URL.HOME} />
      <List>
        {data ? (
          data.map((item) => {
            return (
              <PortfolioCard
                key={item}
                img={item.image_url}
                title={item.name}
              />
            );
          })
        ) : (
          <Loader />
        )}
      </List>
    </Wrapper>
  );
};

export { PortfolioContainer };
