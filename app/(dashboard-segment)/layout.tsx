import SideNav from "@/components/sidenav";
import { TopNav } from "@/components/topnav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <SideNav />
      <main className="flex-1 md:ml-[266px] p-4">
        <TopNav />
        {children}
      </main>
    </div>
  );
}
