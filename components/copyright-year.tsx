/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useEffect, useState } from 'react';

export default function CopyrightYear() {
  // 1. Start with a hardcoded year.
  // This satisfies the "Static" requirement of the build worker.
  const [year, setYear] = useState(2026);

  useEffect(() => {
    // 2. This only runs in the browser.
    // It will update the year if the user visits the site in 2026+.
    setYear(new Date().getFullYear());
  }, []);

  return <span className="text-primary text-xs">{year}</span>;
}
