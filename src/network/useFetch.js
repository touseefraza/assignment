import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [tabledata, setTabledata] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTabledata(data));
  }, [url]);

  return [tabledata];
};

export default useFetch;