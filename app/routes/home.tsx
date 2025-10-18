import type { Route } from "./+types/home";
import HomeLayout from "../../components/layouts/home/HomeLayout";
import { portfolio } from "../data/portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Portafolio de ${portfolio.name}` },
    { name: "description", content: `${portfolio.role} — ${portfolio.bio}` },
  ];
}

export default function Home() {
  return <HomeLayout />;
}
