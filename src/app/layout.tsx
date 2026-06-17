import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Karan Salot | Product Manager, Data & Business Analyst',
  description: 'Official portfolio for Karan Salot. As a Product, Data & Business Analyst, Karan Salot specializes in AI/ML engineering, enterprise data strategy, and strategic product innovation.',
  keywords: ['Karan Salot', 'Karan', 'Salot', 'Product Analyst', 'Data Analyst', 'Business Analyst', 'AI/ML Engineer', 'University of Arizona', 'MIS', 'Product Manager Karan Salot', 'Data Karan Salot', 'karan salot portfolio'],
  authors: [{ name: 'Karan Salot' }],
  creator: 'Karan Salot',
  openGraph: {
    title: 'Karan Salot | Product, Data & Business Analyst',
    description: 'Explore the official portfolio of Karan Salot, featuring product innovation, AI hackathons, and enterprise data analytics.',
    url: 'https://karansalot.netlify.app',
    siteName: 'Karan Salot - Official Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karan Salot | Product, Data & Business Analyst',
    description: 'Explore the official portfolio of Karan Salot, featuring product innovation, AI hackathons, and enterprise data analytics.',
    creator: '@karansalot',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground overflow-x-hidden w-full">
        {children}
      </body>
    </html>
  );
}
