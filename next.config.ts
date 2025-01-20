import tracer from 'dd-trace';
import { NextConfig } from 'next';


tracer.init({
  service: 'sassy-api',
  env: process.env.NODE_ENV,
  version: '1.0.0',
  logInjection: true,
});


const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
