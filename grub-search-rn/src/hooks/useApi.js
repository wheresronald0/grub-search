//ggeting error message so I'm not configuring this way
import { useEffect, useState } from "react";
import yelp from "../api/yelp";

//we're creating our own hook containing other hooks, to be used in SearchScreen

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (initialSearch) => {
    console.log("Howdy");
    try {
      //sends promise
      const response = await yelp.get("/search", {
        params: {
          limit: 1,
          term: initialSearch,
          location: "Bradenton",
        },
      }); //will get back response.data array of objects
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Opps, something went wrong!");
      console.log(err);
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage]; //returning the things that SearchScreen needs
};
