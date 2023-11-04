import {
  Book,
  ClipboardList,
  Home,
  Pencil,
  RefreshCcw,
  Search,
  User2,
  WalletCards,
} from "lucide-react";

export function getPages() {
  return [
    {
      name: "Inicio",
      icon: <Home />,
      link: "/inicio",
    },
    {
      name: "Pagos pendientes",
      icon: <WalletCards />,
      link: "/test",
    },
    {
      name: "Clientes",
      icon: <User2 />,
      link: "/clientes",
    },
    {
      name: "Productos",
      icon: <User2 />,
      link: "/productos",
    },
    {
      name: "Inscripciones",
      icon: <Pencil />,
      subItems: [
        {
          name: "Inscripción a cursar",
          // link: "/inicio",
        },
        {
          name: "Inscripción a examen regular",
          // link: "/inicio",
        },
        {
          name: "Pre-Inscripción a examen libre",
          // link: "/inicio",
        },
        {
          name: "Generar boleta examen libre",
          // link: "/inicio",
        },
        {
          name: "Inscripción a examen libre",
          // link: "/inicio",
        },
      ],
    },
    {
      name: "Consultas",
      icon: <Search />,
      subItems: [
        {
          name: "Ficha académica",
          link: "/ficha-academica",
        },
        {
          name: "Estado contable",
          link: "/estado-contable",
        },
        {
          name: "Datos personales",
          link: "/datos-personales",
        },
        {
          name: "Inscriptos por examen",
          link: "/inscriptos-examen",
        },
        {
          name: "Calendario académico",
          link: "/calendario-academico",
        },
      ],
    },
    {
      name: "Transacciones",
      icon: <RefreshCcw />,
      subItems: [
        {
          name: "Historial",
          link: "/historial-transacciones",
        },
      ],
    },
    {
      name: "Actualizar datos",
      icon: <Pencil />,
      subItems: [
        {
          name: "Cambiar correo",
          link: "/modificar-correo",
        },
        {
          name: "Cambiar clave",
          link: "/modificar-clave",
        },
        {
          name: "Cambiar celular",
          link: "/modificar-celular",
        },
      ],
    },
    {
      name: "Certificaciones",
      icon: <Book />,
      subItems: [
        {
          name: "Certificado de alumno regular",
          link: "/certificado-alumno-regular",
        },
      ],
    },
    {
      name: "Solicitudes",
      icon: <ClipboardList />,
      subItems: [
        {
          name: "Título",
          link: "/solicitud-titulo",
        },
        {
          name: "Solicitudes admisión",
          // link: "/inicio",
        },
        {
          name: "Solicitudes becas",
          // link: "/inicio",
        },
      ],
    },
  ];
}
