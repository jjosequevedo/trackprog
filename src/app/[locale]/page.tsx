'use client';
import Login from "../components/Login";
import { useTranslations } from "use-intl";

export default function Home() {
  const t = useTranslations('login');
  return (
    <Login />
  );
}
