import "dotenv/config"

export function hello(): void {
  console.log(process.env.NIJIVOICE_API_KEY)
}

hello()
