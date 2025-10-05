import { Github, Linkedin, Twitter, Facebook, Instagram, Box } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com', label: 'twitter' },
  { icon: Github, href: 'https://github.com', label: 'github' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'linkedin' },
  { icon: Facebook, href: 'https://www.facebook.com/salmontic', label: 'facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/salmontic', label: 'instagram' },
];

const Command = ({ cmd, children, delay = 0 }) => (
  <div className="line" style={{ animationDelay: `${delay}s` }}>
    <span className="text-primary">~/</span>
    <span className="text-accent-foreground mr-2">$</span>
    <span className="typewriter-text">{cmd}</span>
    <div className="pl-4 pt-1 pb-3 text-muted-foreground">{children}</div>
  </div>
);

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-4xl rounded-lg border-2 border-primary/20 bg-black/30 p-6 font-code shadow-[0_0_20px_theme(colors.primary/0.5)]">
        {/* Terminal Header */}
        <div className="mb-4 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>

        {/* Terminal Body */}
        <div className="space-y-2">
          <div className="line">
            <span className="text-primary">salman@portfolio</span>
            <span className="text-accent-foreground">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-accent-foreground">$</span>
            <span className="ml-2 typewriter-text">cat about.txt</span>
            <span className="cursor"></span>
          </div>

          <Command cmd="whoami" delay={2.5}>
            <p>Salman Fares</p>
          </Command>

          <Command cmd="bio" delay={3}>
            <p>Stargazer, Anime Enthusiast, Music Lover.</p>
            <p>Love exploring the internet ruining his sleeping schedule and bee sleepyhead whole days all along</p>
            <p>I have hands-on experience with point-of-sale systems from my time at local restaurants.</p>
          </Command>

          <Command cmd="socials" delay={3.5}>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </Command>

          <Command cmd="business" delay={4}>
            <Link href="http://www.theqourt.shop" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
              <Box className="h-4 w-4" />
              <span className="text-sm">TÉQOURT</span>
            </Link>
          </Command>

           <div className="line" style={{ animationDelay: '4.5s' }}>
            <span className="text-primary">salman@portfolio</span>
            <span className="text-accent-foreground">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-accent-foreground">$</span>
            <span className="cursor ml-2"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
