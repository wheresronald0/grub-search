import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer U_y_UP9uZzIUW92LX3DJ6PIhBCBHusAAB2q4GRJ6k0KLpd73JaaBCN93-q86xwdJ3T0z5jVb6fxmSGvNGxxZnhMDydyPd92AeohJ-G0bqwXHC-fNXj0oSbiuQe17YXYx",
  },
});
