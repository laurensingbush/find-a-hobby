class NewError extends Error {
    info?: string;
    status?: number;
};

export default async function fetcher<JSON = any>(
    input: RequestInfo,
    init?: RequestInit
): Promise<JSON> {
    const res = await fetch(input, init);
    if (!res.ok) {
        const error = new NewError('An error occurred while fetching the data.');
        const resJSON = await res.json();
        error.info = resJSON.error;
        error.status = res.status;
        throw error;
    }
    return res.json();
};