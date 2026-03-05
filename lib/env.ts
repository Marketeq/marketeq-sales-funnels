import * as v from "valibot"

const envSchema = v.object({
  CAL_API_KEY: v.pipe(v.string(), v.nonEmpty()),
  CAL_USERNAME: v.pipe(v.string(), v.nonEmpty()),
})

export const env = v.parse(envSchema, process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends v.InferOutput<typeof envSchema> {}
  }
}
