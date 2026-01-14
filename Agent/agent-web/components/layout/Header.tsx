import Navbar from "./nav/Navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background">
        <div className="py-3">
            <Navbar />
        </div>
    </header>
  );
}
