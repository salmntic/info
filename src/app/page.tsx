import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';
import { Github, Linkedin, Twitter, Facebook, Instagram, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Left Column */}
            <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left animate-fade-in-up">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-primary/20 shadow-lg">
                <Image
                  src={placeholderImages[0].imageUrl}
                  alt="Salman Fares"
                  fill
                  style={{ objectFit: 'cover' }}
                  data-ai-hint="portrait man"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-foreground">
                Salman Fares
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Stargazer, Anime Enthusiast, Music Lover.
              </p>
              <Card className="w-full text-left bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    I love exploring the depths of the internet, which often leads to a completely ruined sleeping schedule, turning me into a sleepyhead all day long.
                  </p>
                  <p>
                    I have hands-on experience with point-of-sale systems from my time at local restaurants.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="md:col-span-2 space-y-8">
              <div className="p-8 rounded-lg bg-card/30 border border-border/50 shadow-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl font-bold mb-6">Connect with Me</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group">
                    <Card className="transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:-translate-y-1">
                      <CardContent className="p-4 flex items-center gap-4">
                        <Twitter className="w-8 h-8 text-primary" />
                        <span className="font-semibold">Twitter</span>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="group">
                    <Card className="transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:-translate-y-1">
                      <CardContent className="p-4 flex items-center gap-4">
                        <Github className="w-8 h-8 text-primary" />
                        <span className="font-semibold">Github</span>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group">
                    <Card className="transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:-translate-y-1">
                      <CardContent className="p-4 flex items-center gap-4">
                        <Linkedin className="w-8 h-8 text-primary" />
                        <span className="font-semibold">LinkedIn</span>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="https://www.facebook.com/salmontic" target="_blank" rel="noopener noreferrer" className="group">
                    <Card className="transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:-translate-y-1">
                      <CardContent className="p-4 flex items-center gap-4">
                        <Facebook className="w-8 h-8 text-primary" />
                        <span className="font-semibold">Facebook</span>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="https://www.instagram.com/salmontic" target="_blank" rel="noopener noreferrer" className="group">
                    <Card className="transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:-translate-y-1">
                      <CardContent className="p-4 flex items-center gap-4">
                        <Instagram className="w-8 h-8 text-primary" />
                        <span className="font-semibold">Instagram</span>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>

              <div className="p-8 rounded-lg bg-card/30 border border-border/50 shadow-sm animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-2xl font-bold mb-4">My Business</h2>
                <Link href="http://www.theqourt.shop" target="_blank" rel="noopener noreferrer" className="group">
                  <Card className="transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-lg">The Qourt Shop</p>
                        <p className="text-muted-foreground">www.theqourt.shop</p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-primary transition-transform group-hover:translate-x-1" />
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 border-t">
        <div className="container text-center text-sm text-muted-foreground">
          <p>Built by Salman Fares</p>
        </div>
      </footer>
    </div>
  );
}
