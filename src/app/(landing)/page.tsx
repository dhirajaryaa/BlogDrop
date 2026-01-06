import Header from "@/components/common/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check, CheckCircle2, Dot, Mail, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
    const features = [
        {
            number: "1",
            title: "Discover",
            desc: "Engineering blogs",
            details:
                "Our system continuously monitors thousands of engineering blogs, tech company postmortems, and infrastructure publications to identify relevant content.",
        },
        {
            number: "2",
            title: "Filter",
            desc: "Quality signals",
            details:
                "We analyze content for depth, technical accuracy, and real-world applicability. Marketing fluff and beginner tutorials are automatically excluded.",
        },
        {
            number: "3",
            title: "Understand",
            desc: "Deep analysis",
            details:
                "AI-powered analysis extracts key concepts, architecture patterns, lessons learned, and technical decisions from each article.",
        },
        {
            number: "4",
            title: "Explain",
            desc: "In simple terms",
            details:
                "Complex technical concepts are translated into clear explanations with real-world analogies that anyone can understand.",
        },
    ]
    return (
        <>
            <Header />
            <main className="min-h-screen bg-background w-full mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <section className="relative overflow-hidden pt-20 pb-24 sm:py-32">
                    <div className="text-center">
                        <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground ">
                            Get High-signal
                            <span className="block text-primary sm:text-8xl mb-9">Engineering Blogs</span>
                            In Seconds.
                        </h1>
                        <p className="mt-6 text-balance text-lg text-muted-foreground sm:text-xl leading-relaxed">
                            BlogDrop finds, understands, and explains the engineering blogs and postmortems that matter. Save hours of
                            searching for high-quality technical content.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
                            <Button size="lg" asChild>
                                <Link href={"/signup"}>
                                    Get Started <ArrowRight />
                                </Link>
                            </Button>
                            <Button size="lg" asChild variant={"outline"}>
                                <Link href={"/newsletter"}>
                                    Get the weekly drop <Mail />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Problem Section */}
                <section className="border-t border-border py-20 sm:py-28 text-center">
                    <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
                        Engineering knowledge is scattered
                    </h2>
                    <div className="mt-12 flex flex-col gap-8 sm:gap-10 items-left w-fit mx-auto">
                        <div className="flex gap-4 sm:gap-6">
                            <ArrowRight />
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Best insights are hidden inside long engineering blogs and postmortems
                            </p>
                        </div>
                        <div className="flex gap-4 sm:gap-6">
                            <ArrowRight />
                            <p className="text-lg text-muted-foreground leading-relaxed">Finding high-quality content takes time</p>
                        </div>
                        <div className="flex gap-4 sm:gap-6">
                            <ArrowRight />
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Understanding complex architecture is hard without proper context
                            </p>
                        </div>
                    </div>
                </section>

                {/* Solution Section */}
                <section className="border-t border-border py-20 sm:py-28 bg-secondary/30 text-center">
                    <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">BlogDrop does the hard work</h2>
                    <div className="mt-12 space-y-6 items-left w-fit mx-auto">
                        <div className="flex gap-3">
                            <CheckCircle2 className="text-green-400" />
                            <p className="text-muted-foreground">Discovers behind-the-tech engineering blogs</p>
                        </div>
                        <div className="flex gap-3">
                            <CheckCircle2 className="text-green-400" />
                            <p className="text-muted-foreground">Filters out low-signal and marketing content</p>
                        </div>
                        <div className="flex gap-3">
                            <CheckCircle2 className="text-green-400" />
                            <p className="text-muted-foreground">Reads and understands the full article</p>
                        </div>
                        <div className="flex gap-3">
                            <CheckCircle2 className="text-green-400" />
                            <p className="text-muted-foreground">Explains ideas in simple language</p>
                        </div>
                        <div className="flex gap-3">
                            <CheckCircle2 className="text-green-400" />
                            <p className="text-muted-foreground">Uses real-world analogies to clarify concepts</p>
                        </div>
                        <div className="flex gap-3">
                            <CheckCircle2 className="text-green-400" />
                            <p className="text-muted-foreground">Delivers a short weekly email</p>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section id="how-it-works" className="border-t border-border py-20 sm:py-28">
                    <div className="mb-16 w-full text-center">
                        <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl mb-4">How it works</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-center">
                            BlogDrop uses a systematic approach to discover, filter, and deliver the engineering insights that matter.
                            Each step is carefully designed to ensure you get only the highest-quality content.
                        </p>
                    </div>

                    <div className="grid gap-8 sm:gap-12 grid-cols-2">
                        {features.map((item) => (
                            <Card className="bg-muted/50"
                                key={item.number}
                            >
                                <CardHeader>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription>{item.desc}</CardDescription>
                                </CardHeader>
                                <CardContent className="text-muted-foreground">
                                    {item.details}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Difference Section */}
                <section id="difference" className="border-t border-border py-20 sm:py-28 bg-secondary/30 text-center">
                    <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl mb-16">
                        What makes BlogDrop different
                    </h2>
                    <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
                        <div>
                            <h3 className="mb-8 text-xl font-semibold text-foreground">What we focus on</h3>
                            <ul className="space-y-4">
                                {["Architecture patterns", "Scaling systems", "Tradeoffs & failures", "Performance & reliability"].map(
                                    (item) => (
                                        <li key={item} className="flex gap-3">
                                            <Check className="text-primary"/>
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-8 text-xl font-semibold text-foreground">What we ignore</h3>
                            <ul className="space-y-4">
                                {["Beginner tutorials", "SEO content", "Marketing posts", "Listicles"].map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <X className="text-destructive" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Who It's For Section */}
                <section id="for-who" className="border-t border-border py-20 sm:py-28 text-center">
                        <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl mb-12">Who it&apos;s for</h2>
                        <div className="flex gap-4 items-center justify-center flex-wrap w-full">
                            {[
                                "Software engineers",
                                "Backend & infra engineers",
                                "System design learners",
                                "Startup engineers & founders",
                                "Engineering leads",
                                "Tech architects",
                            ].map((item) => (
                                <p key={item} className="p-4 border border-border bg-card rounded-lg w-86">
                                    <span className="text-foreground font-medium">{item}</span>
                                </p>
                            ))}
                        </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-border bg-secondary/50 py-12">
                        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
                            <p>© 2026 BlogDrop. All rights reserved.</p>
                        </div>
                </footer>
            </main>
        </>
    )
}
