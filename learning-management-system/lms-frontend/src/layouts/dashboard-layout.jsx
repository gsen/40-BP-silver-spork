import { Link, Outlet } from "react-router";

const dashboardLinks = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/my-courses", label: "My Courses" },
  { to: "/instructor", label: "Instructor Dashboard" },
  { to: "/instructor/create", label: "Create Course" },
  { to: "/instructor/manage", label: "Manage Courses" },
];

export default function DashboardLayout() {
  return (
    <div className="grid gap-6 md:grid-cols-[220px_1fr]">
      <aside className="h-fit rounded-lg border bg-card p-3">
        <nav className="grid gap-1 text-sm">
          {dashboardLinks.map((item) => (
            <Link key={item.to} to={item.to} className="rounded-md px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <section>
        <Outlet />
      </section>
    </div>
  );
}
