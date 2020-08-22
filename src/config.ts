import dotenv from 'dotenv'
dotenv.config()

export const __PRODUCTION__ = process.env.NODE_ENV === 'production'
export const __LOG_LEVEL__ = __PRODUCTION__ ? 'SILENT' : 'DEBUG'