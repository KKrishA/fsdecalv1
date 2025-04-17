// app/dark-mode/page.tsx
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function DarkModePage() {
  // Get the current pathname using the Next.js hook.
  const pathname = usePathname();
  // Use clsx to conditionally set the container's class.
  const containerClass = clsx("container", { "dark-mode": pathname === '/dark-mode' });

  return (
    <div className={containerClass}>
      <h1>Dark Mode Activated</h1>
      <div style={{ marginTop: '20px' }}>
        <Link href="/dark-mode">
          <button style={{ marginRight: '10px', padding: '10px 20px' }}>
            Dark Mode
          </button>
        </Link>
        <Link href="/light-mode">
          <button style={{ padding: '10px 20px' }}>
            Light Mode
          </button>
        </Link>
      </div>
    </div>
  );
}
