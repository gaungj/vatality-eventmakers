import { Header } from "@/components/header";

export default function Layout({ children }) {
  return (
    <main className="flex flex-col m-auto">
      <Header />
      <main>{children}</main>
    </main>
  );
}
