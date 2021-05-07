export const TODAY = new Date().toISOString().substring(0, 10)

export const TOMORROW = new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toISOString().substring(0, 10)