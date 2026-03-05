/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useEffect, useState } from 'react';

export default function CopyrightYear() {
  // We use a safe default to prevent hydration mismatch
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update on client side just in case
    setYear(new Date().getFullYear());
  }, []);

  return <span className="text-primary text-xs">{year}</span>;
}
