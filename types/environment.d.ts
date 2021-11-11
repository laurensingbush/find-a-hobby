namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
        DATABASE: string
        GITHUB_ID: string
        GITHUB_SECRET: string
        GOOGLE_ID: string
        GOOGLE_SECRET: string
        NEXTAUTH_URL: string
        SECRET: string
    }
}