import useSWR from "swr";
import fetcher from "../fetcher";

interface DataResponse<T> {
    data?: T;
    isValidating: boolean;
    error: any;
};

export const useRequest = <T>(url: string | null): DataResponse<T> => {
    const { data: response, error } = useSWR<T, any>(url, fetcher);
    return {
        data: response,
        isValidating: !response && !error,
        error: error
    };
};