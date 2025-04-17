// app/light-mode/page.tsx
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function LightModePage() {
  const pathname = usePathname();
  // Since this page is at "/light-mode", isDarkMode will be false.
  const isDarkMode = pathname === '/dark-mode';
  return (
    <div className={clsx("container", { "dark-mode": isDarkMode })}>
      <h1>Light Mode Activated</h1>
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
