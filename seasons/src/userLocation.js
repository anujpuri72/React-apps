import { useState, useEffect } from "react";
export default () => {
  const [lat, updateLat] = useState(null);
  const [err, updateErr] = useState("");
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => updateLat(position.coords.latitude),
      (err) => updateErr(err.message)
    );
  }, []);
  return [lat, err];
};
