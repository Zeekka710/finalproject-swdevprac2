'use client';

import React from 'react';

export default function InteractiveCard({
  children,
  contentName,
}: {
  children: React.ReactNode;
  contentName: string;
}) {
  function onCardMouseAction(event: React.SyntheticEvent) {
    if (event.type === 'mouseover') {
      event.currentTarget.classList.add('shadow-2xl');
    } else {
      event.currentTarget.classList.remove('shadow-2xl');
    }
  }

  return (
    <div
      className="w-full max-w-sm h-auto rounded-lg overflow-hidden transition-shadow duration-300"
      role="button"
      aria-label={`Interactive card for ${contentName}`}
      onMouseOver={(e) => onCardMouseAction(e)}
      onMouseOut={(e) => onCardMouseAction(e)}
    >
      {children}
    </div>
  );
}
