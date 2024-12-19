export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full h-[100px] bg-gray-100 flex items-center justify-center">
        <p className="text-2xl font-bold">Header</p>
      </header>

      <div className="flex flex-grow">
        <nav className="w-1/6 min-w-[200px] bg-gray-200 p-4">
          <div className="text-lg font-semibold mb-4">Navbar</div>
        </nav>
        <main className="flex-grow">{children}</main>
      </div>

      <footer className="w-full h-[100px] bg-gray-300 flex items-center justify-center">
        <p>Footer</p>
      </footer>
    </div>
  );
}
