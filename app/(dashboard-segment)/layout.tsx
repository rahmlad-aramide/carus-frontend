import SideNav from "@/components/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <SideNav />
      <main className="flex-1 md:ml-[266px] p-4">{children}</main>
    </div>
  );
}
