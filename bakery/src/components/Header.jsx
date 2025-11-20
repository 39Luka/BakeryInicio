import Nav from "./Nav.jsx";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-[var(--color-secondary)] flex items-center justify-between p-8">
      <h1 className="text-base heading-base heading-h1 text-[var(--color-primary)]">
        Bakery++
      </h1>
      <Nav />
    </header>
  );
}

export default Header;
