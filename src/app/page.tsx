import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 flex items-center justify-center">
        <section className="container grid items-center justify-center text-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
              <Image
                src={placeholderImages[0].imageUrl}
                alt="Salman Fares"
                fill
                style={{ objectFit: 'cover' }}
                data-ai-hint="portrait man"
              />
            </div>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              Salman Fares
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Creative Developer & Designer building beautiful and functional
              web experiences.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#">
                <Button variant="outline" size="icon">
                  <Twitter />
                </Button>
              </Link>
              <Link href="#">
                <Button variant="outline" size="icon">
                  <Github />
                </Button>
              </Link>
              <Link href="#">
                <Button variant="outline" size="icon">
                  <Linkedin />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 md:px-8 md:py-0 border-t">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by Salman Fares.
          </p>
        </div>
      </footer>
    </div>
  );
}
