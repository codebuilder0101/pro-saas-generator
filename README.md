# **Sassy: Micro-SaaS Template Generator**

Welcome to **Sassy**, a powerful micro-SaaS template generator designed to streamline your SaaS development process. Built with the latest web technologies, Sassy integrates **Supabase** for database management, **Stripe** for payment processing, and offers a highly customizable and user-friendly front-end built using **Next.js**, **TypeScript**, and **TailwindCSS**.

This project provides a clean and efficient starting point for building subscription-based services with seamless authentication, plan management, and payment flows.

## **Tech Stack**

### **1. Next.js 15**
Next.js is a React-based framework that provides excellent developer experience with built-in server-side rendering, API routes, and automatic static optimization. It helps us build SEO-friendly and fast web applications with minimal setup.

- **Server-Side Rendering (SSR)**: Improve performance and SEO by rendering pages on the server before they are sent to the client.
- **API Routes**: Handle backend logic like Stripe and Supabase interactions directly within the Next.js app.
- **File-based Routing**: Automatically generates routes based on the file structure.

### **2. TypeScript**
TypeScript is a superset of JavaScript that adds static types to the language. It improves code quality and developer productivity by catching errors at compile time rather than run time.

- **Type Safety**: TypeScript prevents many common bugs by ensuring that variables, functions, and objects are used correctly.
- **IDE Support**: Excellent auto-completion and error checking in IDEs, making development smoother and faster.

### **3. TailwindCSS**
TailwindCSS is a utility-first CSS framework that allows us to create fully customizable, responsive designs without writing a single line of custom CSS.

- **Customizable**: Tailwind is easily configurable to match your project's design system.
- **Responsive Design**: Built-in responsive utilities ensure that your app looks great on any device.
- **Quick Styling**: Focus on writing HTML and applying utility classes, reducing the need for additional stylesheets.

### **4. Supabase**
Supabase is an open-source alternative to Firebase, providing real-time databases, authentication, storage, and more. It's built on top of PostgreSQL and integrates seamlessly with the Sassy template for user management and subscription data.

- **Real-time Database**: Provides real-time sync with the database, perfect for subscription tracking.
- **Authentication**: Easily manage user accounts with email, password, and OAuth logins.
- **PostgreSQL**: Reliable, scalable, and easy-to-use SQL database.

### **5. Stripe**
Stripe is a global payment processor that allows us to handle payments and subscriptions. With its simple API, we can integrate payment functionality quickly and securely.

- **Subscription Billing**: Easily handle subscription-based models and manage customer plans.
- **Stripe Checkout**: A fully customizable payment page hosted by Stripe to handle transactions securely.
- **Webhooks**: Handle events like successful payments, cancellations, and more.

## **Features**

- **Authentication**: Secure login system with Supabase Auth.
- **Subscription Plans**: Create and manage user subscription plans (`free`, `starter`, `creator`, `pro`).
- **Stripe Integration**: Seamless integration for processing payments and managing subscriptions.
- **Responsive UI**: Build with TailwindCSS to look great on any device.
- **Server-Side Logic**: All backend logic handled via Next.js API Routes.

## **How to Get Started**

### 1. Clone the repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/sassy.git
cd sassy
```

### 2. Install dependencies
Install the required dependencies using **pnpm**:

```bash
pnpm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory and add your Supabase and Stripe credentials:

```env
NEXT_PUBLIC_PROJECT_URL=http://localhost:3000

NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<your-stripe-publishable-key>

SUPABASE_SECRET_KEY=<your-supabase-secret-key>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
STRIPE_WEBHOOK_SECRET=<your-stripe-webhook-secret>
```

### 4. Run the project
To start the development server, run:

```bash
pnpm dev
```

Visit `http://localhost:3000` to view the app.

### 5. Set up Supabase Database
Execute the following SQL query in your Supabase dashboard to set up the subscriptions table:

```sql
create table subscriptions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references auth.users(id) on delete cascade,
  stripe_subscription_id text unique,
  plan text check (plan in ('free', 'starter', 'creator', 'pro')) not null default 'free',
  status text check (status in ('active', 'canceled', 'past_due', 'incomplete', 'trialing')) not null default 'active',
  current_period_start timestamp with time zone,
  current_period_end timestamp with time zone,
  created_at timestamp with time zone default now()
);
```

**Important**: Remove **Row Level Security (RLS)** for unrestricted access to the subscription data.

### 6. Set up Stripe
To fully integrate Stripe, you will need to:

- Set up a **Stripe account** and get your API keys.
- Configure Stripe's webhook to listen for events related to subscriptions.

## **Security Considerations**

- **Keep your secrets safe**: Never expose the `SUPABASE_SECRET_KEY`, `STRIPE_SECRET_KEY`, or any other sensitive credentials in your client-side code. These should only be used on the server-side.
- **Enable HTTPS**: Always use HTTPS in production to secure your users' data.
- **Stripe Webhooks**: Ensure that you validate Stripe webhook events securely using the webhook secret key.

## **Contributing**

We welcome contributions to the project! If you want to improve or add new features, feel free to open an issue or a pull request.

### Guidelines:
- Fork the repository.
- Create a new branch.
- Add your changes and tests.
- Submit a pull request.

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.