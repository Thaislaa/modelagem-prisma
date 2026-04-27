import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";

export function handleError(error: any) {
    if (error instanceof PrismaClientKnownRequestError) {
        console.log(`Erro [${error.code}]: ${error.message}`)
        return null
    }
    console.log(error)
    return null
}