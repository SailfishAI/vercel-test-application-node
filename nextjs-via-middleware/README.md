This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Example requests

### Fetch Hello API

```bash
$ curl http://localhost:3000/api/hello
```

**Response**

```
{
    "message":"Hello, world!"
}
```

### Fetch User API

```bash
$ curl http://localhost:3000/api/user/123
```

**Response**

```
{"userId":"123","name":"Test User"}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

### Prerequisites

- Install Vercel CLI: `npm install -g vercel`
- Authenticate: `vercel login`

### Deployment

**Important:** Deploy from the parent directory (`/vercel-test-application-node`), not from this subdirectory.

```bash
# Navigate to the parent directory
cd <GIT_REPO_ROOT>

# Deploy to production
vercel --prod --yes
```

### Verify Deployment

After deployment completes, Vercel will provide a production URL
   - **Note:** The actual URL depends on your Vercel project name and configuration (e.g., `https://your-project-name.vercel.app`)

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
