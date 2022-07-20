export default function Header({ children }) {
  return (
    <header>
      <div className="bg-pink-300 mx-auto p-4">
        <h1 className="text-center font-semibold text-xl">{children}</h1>
      </div>
    </header>
  );
}