/**
 * Error Handling Utilities
 */

export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public originalError?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const handleApiError = (error: unknown): ApiError => {
  if (error instanceof ApiError) {
    return error;
  }

  if (error instanceof Error) {
    console.error('[API Error]:', error.message);
    return new ApiError(500, error.message, error);
  }

  const message = String(error);
  console.error('[Unknown Error]:', message);
  return new ApiError(500, 'An unexpected error occurred', error);
};

/**
 * Safely fetch Payload data with error handling
 */
export const safePayloadFetch = async <T>(
  fn: () => Promise<T>,
  context: string = 'Payload CMS'
): Promise<T | null> => {
  try {
    return await fn();
  } catch (error) {
    console.error(`[${context}] Error:`, error);
    return null;
  }
};

/**
 * Log error to console in development
 */
export const logError = (message: string, error?: unknown, isDev: boolean = true) => {
  if (isDev || process.env.NODE_ENV === 'development') {
    console.error(`[ERROR] ${message}`, error);
  }
};
