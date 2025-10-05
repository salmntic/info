
'use client';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Store } from 'lucide-react';

const SvgBlockLogo = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M39.125 64C39.125 49.7917 50.3333 39.125 64 39.125C77.6667 39.125 88.875 49.7917 88.875 64C88.875 78.2083 77.6667 88.875 64 88.875C50.3333 88.875 39.125 78.2083 39.125 64ZM64 0C28.6667 0 0 28.6667 0 64C0 99.3333 28.6667 128 64 128C99.3333 128 128 99.3333 128 64C128 28.6667 99.3333 0 64 0Z"
      fill="currentColor"
    />
  </svg>
);


export default function Page() {
  const [lines, setLines] = useState<string[]>([]);
  const content = [
    'Initializing SALMAN v1.0.0...',
    'Scanning for user information...',
    'USER: Salman Fares',
    'STATUS: Software Engineer',
    'LOCATION: United Arab Emirates',
    '',
    'Fetching social links...',
    ' > GitHub: https://github.com/salmntic',
    ' > LinkedIn: https://linkedin.com/in/salman-fares',
    ' > Twitter: https://twitter.com/salmntic',
    '',
    'Loading business details...',
    ' > TÉQOURT: teqourt.com',
    '',
    'All systems operational.',
    'Welcome to my portfolio.',
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < content.length) {
        setLines((prev) => [...prev, content[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const getLinkProps = (line: string) => {
    if (line.includes('GitHub')) {
      return { href: 'https://github.com/salmntic', icon: <Github /> };
    }
    if (line.includes('LinkedIn')) {
      return { href: 'https://linkedin.com/in/salman-fares', icon: <Linkedin /> };
    }
    if (line.includes('Twitter')) {
      return { href: 'https://twitter.com/salmntic', icon: <Twitter /> };
    }
    if (line.includes('TÉQOURT')) {
      return { href: 'https://teqourt.com', icon: <SvgBlockLogo /> };
    }
    return { href: '#', icon: null };
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-8 font-mono text-lg text-green-400">
      <div className="w-full max-w-4xl rounded-lg border border-green-700 bg-gray-900/50 p-6 shadow-[0_0_20px_theme(colors.green.500/0.5)]">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-4 w-4 rounded-full bg-red-500"></span>
          <span className="h-4 w-4 rounded-full bg-yellow-500"></span>
          <span className="h-4 w-4 rounded-full bg-green-500"></span>
        </div>
        <div className="overflow-hidden">
          {lines.map((line, index) => {
            const { href, icon } = getLinkProps(line);
            const isLink = icon !== null;
            const isLastLine = index === lines.length - 1 && index === content.length - 1;

            return (
              <p
                key={index}
                className="line"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-green-600 mr-2">$</span>
                {isLink ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 underline hover:text-cyan-300"
                  >
                    {icon}
                    <span>{line.substring(line.indexOf('>') + 2)}</span>
                  </a>
                ) : (
                  <span>{line}</span>
                )}
                {isLastLine && <span className="cursor"></span>}
              </p>
            );
          })}
           {lines.length < content.length && (
            <p>
              <span className="text-green-600 mr-2">$</span>
              <span className="cursor"></span>
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
