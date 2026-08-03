type RateLimiterOptions = {
  windowMs: number;
  max: number;
};

export class RateLimiter {
  private readonly windowMs: number;
  private readonly max: number;
  private readonly entries = new Map<string, number[]>();

  constructor(options: RateLimiterOptions) {
    this.windowMs = options.windowMs;
    this.max = options.max;
  }

  check(key: string): boolean {
    const now = Date.now();
    const bucket = this.entries.get(key) ?? [];
    const recent = bucket.filter((timestamp) => now - timestamp < this.windowMs);

    if (recent.length >= this.max) {
      this.entries.set(key, recent);
      return false;
    }

    recent.push(now);
    this.entries.set(key, recent);
    return true;
  }
}
