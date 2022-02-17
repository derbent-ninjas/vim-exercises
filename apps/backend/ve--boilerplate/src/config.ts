
const isRequired = (propName: string): never => {
  throw new Error(`Config property ${propName} is required`)
}

export default () => ({
  server: {
    host: process.env.HOST ?? isRequired('HOST'),
    port: Number(process.env.REST_PORT) ?? isRequired('REST_PORT'),
  }
})
