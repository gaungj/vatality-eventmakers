import Link from "next/link";

export const Header = async () => {
  return (
    <header className="flex py-8 px-8 border-b border-slate-400 tracking-tight">
      <Link href="/">
        <div className="text-lg font-bold text-sky-600">Eventmakers</div>
      </Link>
      <div className="px-20 flex items-center gap-6 font-semibold tracking-tight">
        <Link href="/">Home</Link>
        <Link href="/dashboard/events">Dashboard</Link>
      </div>
    </header>
  );
};
