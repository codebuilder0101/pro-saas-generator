// ApiService.ts

interface RequestOptions {
    method: string;
    headers: Record<string, string>;
    body?: string;
}

class ApiService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private async request<T>(url: string, options: RequestOptions): Promise<T> {
        try {
            const response = await fetch(`${this.baseUrl}${url}`, options);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data: T = await response.json();
            return data;
        } catch (error) {
            console.error('API Request Error:', error);
            throw error;
        }
    }

    public get<T>(url: string): Promise<T> {
        const options: RequestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        return this.request<T>(url, options);
    }

    public post<T>(url: string, data: object): Promise<T> {
        const options: RequestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        };
        return this.request<T>(url, options);
    }

    public put<T>(url: string, data: object): Promise<T> {
        const options: RequestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        };
        return this.request<T>(url, options);
    }

    public delete<T>(url: string): Promise<T> {
        const options: RequestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };
        return this.request<T>(url, options);
    }
}

export default ApiService;
