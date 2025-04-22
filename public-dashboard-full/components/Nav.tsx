import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/messages">Messages</Link>
    </nav>
  );
}
