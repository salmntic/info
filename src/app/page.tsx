import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { placeholderImages } from '@/lib/placeholder-images';

export default function Home() {
  const featuredWork = placeholderImages.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <a href="#" className="text-2xl font-bold">
            SF
          </a>
          <nav className="hidden md:flex gap-4">
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Work</Button>
            <Button variant="ghost">Contact</Button>
          </nav>
          <Button>Hire Me</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-start gap-2">
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
          </div>
        </section>

        <section className="container pb-8 md:py-12">
          <h2 className="text-2xl font-bold mb-6">Featured Work</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredWork.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-0">
                  <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={item.imageUrl}
                      alt={item.description}
                      fill
                      style={{ objectFit: 'cover' }}
                      data-ai-hint={item.imageHint}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{item.description}</h3>
                    <p className="text-sm text-muted-foreground">
                      Project Description
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
