export default function Header({ children = 'Título do Projeto', size }) {
  let fontSize = 'text-xl';

  if (size === 'large') {
    fontSize = 'text-2xl';
  }

  return (
    <header>
      <div className="bg-yellow-100 mx-auto p-4">
        <h1 className={`text-center font-semibold ${fontSize}`}>{children}</h1>
      </div>
    </header>
  );
}
