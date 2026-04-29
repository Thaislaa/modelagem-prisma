import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";

export function handleError(error: any): never {
    if (error instanceof PrismaClientKnownRequestError) {
        console.error(`Erro [${error.code}]: ${error.message}`)
        throw error
    }

    console.error(error)
    throw error
}