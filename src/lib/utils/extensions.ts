export const first = <T>(arr: T[]): T | undefined => arr.length > 0 ? arr[0] : undefined;
export const last = <T>(arr: T[]): T | undefined => arr.length > 0 ? arr[arr.length - 1] : undefined;