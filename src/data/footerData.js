import logo from "@/images/resources/footer-logo.png";

const social = [
  { icon: "fa-twitter", link: "https://twitter.com/perpusnas1" },
  { icon: "fa-facebook-square", link: "https://www.facebook.com/ayokeperpusnas" },
  { icon: "fa-youtube", link: "https://www.youtube.com/@Katinksg" },
  { icon: "fa-instagram", link: "https://www.instagram.com/perpusnas.go.id/" },
];

const footerData = {
  logo,
  social,
  year: new Date().getFullYear(),
  author: "Perpustakaan Nasional RI",
  about:
    "1 Pintu Pencarian Dataset Perpustakaan",
  icons: [
    // {
    //   id: 1,
    //   icon: "fas fa-phone-square-alt",
    //   content: "085717147303",
    //   subHref: "tel",
    // },
    {
      id: 2,
      icon: "fas fa-envelope",
      content: "info@perpusnas.go.id",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: "fas fa-map-marker-alt",
      content: "Jl. Medan Merdeka Selatan No.11, Jakarta 10110",
    },
  ],
  companies: [
    { id: 1, link: "/about", title: "Tentang" },
    { id: 2, link: "https://data.perpusnas.go.id/", title: "Pendataan Perpustakaan" },
    // { id: 3, link: "#", title: "Rewards" },
    // { id: 4, link: "#", title: "Work with Us" },
    // { id: 5, link: "#", title: "Meet the Team" },
  ],
  explore: [
    { id: 1, link: "https://isbn.perpusnas.go.id/", title: "ISBN" },
    { id: 2, link: "http://opac.perpusnas.go.id/", title: "OPAC" },
    { id: 3, link: "https://onesearch.id/", title: "OneSearch" },
    { id: 4, link: "https://ipusnas.id/", title: "iPusnas" },
    { id: 5, link: "https://e-resources.perpusnas.go.id/", title: "e-Resources" },
  ],
  link: [
    { id: 1, link: "https://isbn.perpusnas.go.id/", title: "tes" },
    { id: 2, link: "http://opac.perpusnas.go.id/", title: "OPAC" },
    { id: 3, link: "https://onesearch.id/", title: "OneSearch" },
    { id: 4, link: "https://ipusnas.id/", title: "iPusnas" },
    { id: 5, link: "https://e-resources.perpusnas.go.id/", title: "e-Resources" },
  ],
};

export default footerData;
