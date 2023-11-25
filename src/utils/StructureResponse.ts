
export const structureResponse = (body: any, success: boolean, message: string): { headers: { success: boolean, message: string }, body: any } => {
    return {
        headers: { success, message },
        body: body
    };
};