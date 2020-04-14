import React, { useState, useEffect } from "react";
import axios from "axios";
const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  const fetchData = async () => {
    const respone = await axios
      .get(`https://jsonplaceholder.typicode.com/${resource}`)
      .then((response) => setResources(response.data));
  };
  useEffect(() => {
    fetchData(resource);
  }, [resource]);
  return resources;
};
export default useResources;
