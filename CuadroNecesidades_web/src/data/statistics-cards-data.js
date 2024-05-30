import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Total solicitado",
    value: "$53k",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "de ingresos mensual",
    },
  },
  {
    color: "gray",
    icon: UsersIcon,
    title: " Usuarios en linea",
    value: "2,3",
    footer: {
      color: "text-green-500",
      value: "",
      label: "",
    },
  },
  {
    color: "gray",
    icon: UserPlusIcon,
    title: "Articulos solicitados",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "",
      label: "Semestre 3",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Solicitado ultimo semestre",
    value: "$103,430",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: " Ultimo semestre",
    },
  },
];

export default statisticsCardsData;
