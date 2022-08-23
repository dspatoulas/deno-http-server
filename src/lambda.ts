import {
    APIGatewayProxyEventV2,
    APIGatewayProxyResultV2,
    Context,
} from "https://deno.land/x/lambda/mod.ts";

export async function handler(
    _event: APIGatewayProxyEventV2,
    _context: Context,
): Promise<APIGatewayProxyResultV2> {
    return {
        body: `Welcome to deno ${Deno.version.deno} 🦕`,
        headers: { "content-type": "text/html;charset=utf8" },
        statusCode: 200,
    };
}
