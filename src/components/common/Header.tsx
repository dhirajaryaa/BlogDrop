import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <nav className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
                {/* logo and title */}
                <div className="flex items-center gap-2 justify-center">
                    <Image src="/logo.png" alt="BlogDrop Logo" width={32} height={32} className='h-auto w-8 sm:w-9' />
                    <span className="text-xl sm:text-3xl font-bold text-foreground underline">BlogDrop</span>
                </div>
                {/* profile and login */}
                <div className='flex items-center justify-center gap-4'>
                    <Button variant='outline' asChild>
                        <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/signup">Get Started</Link>
                    </Button>
                </div>
            </nav>
        </header>
    )
}

export default Header