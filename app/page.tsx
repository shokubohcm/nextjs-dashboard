import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
            <Link href="/dashboard" className="text-blue-500 font-bold text-xl">
              Go to Dashboard :)
            </Link>
        </div>
    </main>
  );
}
