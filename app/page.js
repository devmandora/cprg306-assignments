// app/page.js

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Assignments</h1>
      <ul>
        <li><Link href="/week-1">Week 1</Link></li>
        <li><Link href="/week-2">Week 2</Link></li>
        <li><Link href="/week-3">Week 3</Link></li>
        <li><a href="/week-4">Week 4</a></li>
      </ul>
    </div>
  );
}
