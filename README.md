# IPO Calendar - Next.js Application

A comprehensive IPO tracking and financial calculator application built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 📊 **IPO Calendar**: Track upcoming and current IPOs
- 💰 **Grey Market Premium (GMP)**: Real-time GMP data
- 📈 **Subscription Status**: IPO subscription tracking
- 🔄 **Share Buyback Offers**: Complete buyback information
- 🧮 **Financial Calculators**: SIP, Lumpsum, FD, PPF, RD, NPS calculators
- 📱 **Responsive Design**: Mobile-first approach
- 🔍 **SEO Optimized**: Complete SEO implementation
- 📝 **Blog System**: Content management system
- 🏢 **Broker Comparison**: Stock broker comparison tools

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Chart.js with React Chart.js 2
- **Date Handling**: date-fns

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd ipo-calendar
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── (pages)/           # Route groups
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable components
├── lib/                   # Utility functions and data
├── public/               # Static assets
└── types/                # TypeScript type definitions
\`\`\`

## Key Pages

- `/` - Homepage with IPO overview
- `/upcoming-ipo-calendar` - IPO calendar
- `/ipo-subscription-status` - Subscription tracking
- `/ipo-grey-market-premium` - GMP data
- `/share-buyback-offers` - Buyback offers
- `/calculators/*` - Financial calculators
- `/blog` - Blog system
- `/stock-brokers-comparison` - Broker comparison

## Configuration

### Tailwind CSS
The project uses a custom Tailwind configuration with:
- Custom color palette
- Extended animations
- Responsive breakpoints
- Typography plugin
- Forms plugin

### Next.js
Configured with:
- TypeScript support
- Image optimization
- ESLint integration
- Experimental package imports optimization

## SEO Features

- Dynamic meta tags
- Structured data
- XML sitemap generation
- Open Graph tags
- Twitter Card support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please contact the development team or create an issue in the repository.
