import React, { useState, useEffect } from "react";
import { Image, Markdown } from "react-markdown";

const Offer = () => {
  const [offer, setOffer] = useState(null);

  useEffect(() => {
    fetch("/api/offer")
      .then((response) => response.json())
      .then((offer) => setOffer(offer));
  }, []);

  if (!offer) {
    return <div>Oferta nie jest dostępna.</div>;
  }

  return (
    <div>
      <h2>Oferta</h2>

      <Image src={offer.image} />

      <Markdown>{offer.content}</Markdown>
    </div>
  );
};

export default Offer;
