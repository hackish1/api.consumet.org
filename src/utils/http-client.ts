// advanced HTTP client for browser simulation and proxy support

class HttpClient {
    constructor() {
        this.proxy = null;
    }

    setProxy(url) {
        this.proxy = url;
    }

    async get(url) {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            ...(this.proxy && { headers: new Headers({ 'Proxy-Authorization': `Basic ${btoa(this.proxy)}` }) })
        });
        return response.json();
    }

    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            mode: 'cors',
            ...(this.proxy && { headers: new Headers({ 'Proxy-Authorization': `Basic ${btoa(this.proxy)}` }) })
        });
        return response.json();
    }
}

export default HttpClient;