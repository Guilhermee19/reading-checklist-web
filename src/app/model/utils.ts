export interface PagedReq<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export type Timeout = NodeJS.Timeout | undefined;