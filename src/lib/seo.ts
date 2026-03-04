export const generateSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Lakshmi Glass & Plywoods",
  image: "https://lakshmiglass.com/logo.png",
  description:
    "Premium UPVC Windows Manufacturer and Interior Designers in Coimbatore.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123, Industrial Estate, Gandhipuram",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    postalCode: "641012",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.0168,
    longitude: 76.9558,
  },
  url: "https://lakshmiglass.com",
  telephone: "+919876543210",
  priceRange: "$$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "19:00",
  },
  sameAs: [
    "https://www.facebook.com/lakshmiglass",
    "https://www.instagram.com/lakshmiglass",
  ],
});
