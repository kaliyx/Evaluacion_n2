import type { Route } from "./+types/home";
import HomeLayout from "../../components/layouts/home/HomeLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portafolio" },
    { name: "description", content: "Portafolio y proyectos" },
  ];
}

export default function Home() {
  return <HomeLayout />;
}
