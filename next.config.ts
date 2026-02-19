import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

import { withPayload } from '@payloadcms/next/withPayload'

export default withPayload(nextConfig)
