import Head from 'next/head';

export default function HeaderSection({ title, description, dir = "ltr" }) {
  return (
    <header className={`bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16`} dir={dir}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl opacity-90 max-w-2xl">{description}</p>
      </div>
    </header>
  );
}
