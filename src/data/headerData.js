import logo from "@/images/resources/logo-1.png";
import logo2 from "@/images/resources/logo-2.png";

const navItems = [
  {
    id: 1,
    name: "Beranda",
    href: "/",
    subNavItems: [
      // {
      //   id: 1,
      //   name: "Home One",
      //   href: "/",
      // },
      // {
      //   id: 2,
      //   name: "Home Two",
      //   href: "/home2",
      // },
      // {
      //   id: 3,
      //   name: "Header Styles",
      //   href: "/",
      //   subItems: [
      //     {
      //       id: 1,
      //       name: "Header One",
      //       href: "",
      //     },
      //     { id: 2, name: "Header Two", href: "" },
      //   ],
      // },
    ],
  },
  {
    id: 2,
    name: "Dataset",
    href: "/dataset",
    subNavItems: [
      { id: 1, name: "Destinations", href: "/destinations" },
      { id: 2, name: "Destinations Detail", href: "/destinations-details" },
    ],
  },
  {
    id: 3,
    name: "Visualisasi",
    href: "/visualisasi",
    subNavItems: [
      { id: 1, name: "Tours", href: "/tours" },
      { id: 2, name: "Tours List", href: "/tours-list" },
      { id: 3, name: "Tours Details", href: "/tour-details" },
    ],
  },
  {
    id: 4,
    name: "Infografik",
    href: "/infografik",
    subNavItems: [{ id: 1, name: "About", href: "/about" }],
  },
  {
    id: 5,
    name: "Artikel",
    href: "/artikel",
    subNavItems: [
      { id: 1, name: "News", href: "/news" },
      { id: 2, name: "News Details", href: "/news-details" },
    ],
  },
  {
    id: 6,
    name: "Kontak",
    href: "/kontak",
    subNavItems: [],
  },
];

const social = [
  { icon: "fa-facebook-square", link: "https://www.facebook.com/ayokeperpusnas" },
  { icon: "fa-twitter", link: "https://twitter.com/perpusnas1" },
  { icon: "fa-instagram", link: "https://www.instagram.com/perpusnas.go.id/" },
  { icon: "fa-youtube", link: "https://www.youtube.com/@Katinksg" },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: "icon-phone-call",
      content: "0812-3456-789",
      subHref: "phone",
    },
    {
      id: 2,
      icon: "icon-at",
      content: "satudata@perpusnas.go.id",
      subHref: "mailto",
    },
  ],
  navItems,
  social,
  logo,
  logo2,
};

export default headerData;
