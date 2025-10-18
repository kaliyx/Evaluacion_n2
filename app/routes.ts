import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("proyectos", "routes/proyectos.tsx"),
  route("sobre-mi", "routes/sobre-mi.tsx"),
  route("contacto", "routes/contacto.tsx"),
] satisfies RouteConfig;
