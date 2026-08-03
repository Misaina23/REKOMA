# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

### Email configuration (Resend)

To enable the admin verification email flow, create a local environment file:

```sh
cp .env.example .env.local
```

Then edit .env.local and set:

```env
RESEND_API_KEY=your_resend_api_key_here
RESEND_FROM_EMAIL=donations@rekoma-pdima.org
RESEND_FROM_NAME=REKOMA
```

If you deploy to Cloudflare or another platform, set the same variables in the platform environment.

### Vercel deployment checklist

Before deploying to Vercel, add these environment variables in the Vercel dashboard:

```env
RESEND_API_KEY=your_resend_api_key_here
RESEND_FROM_EMAIL=donations@rekoma-pdima.org
RESEND_FROM_NAME=REKOMA

# Optional but useful for local development
VITE_RESEND_API_KEY=your_resend_api_key_here
VITE_RESEND_FROM_EMAIL=donations@rekoma-pdima.org
VITE_RESEND_FROM_NAME=REKOMA
```

Then deploy with the default project settings. The app is configured to use the Vercel Nitro preset.

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
