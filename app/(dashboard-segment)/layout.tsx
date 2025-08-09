import SideNav from "@/components/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SideNav />
      <main>{children}</main>
    </div>
  );
}
