declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: {
        brand?: string
        store_name?: string
        store_region?: string
        event_category?: string
        [key: string]: string | number | boolean | undefined
      }
    ) => void
  }
}

export {}