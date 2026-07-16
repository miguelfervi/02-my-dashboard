import { cacheLife } from "next/cache";

export default async function RandomPage() {
    'use cache'
    cacheLife({
        stale: 5, // 5 segundos
        revalidate: 10, // 10 segundos
        // expire: 86400, // 24 hours
    });

    const random = Math.random();
    const now = Date.now();
    const date =  new Date();
    const uuid = crypto.randomUUID();
    const bytes = crypto.getRandomValues(new Uint8Array(16));

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl my-2">Contenido único</h1>
            <p>Random: {random}</p>
            <p>Now: {now}</p>
            <p>Date: {date.toString()}</p>
            <p>UUID: {uuid}</p>
            <p>Bytes: {Array.from(bytes).join(', ')}</p>
        </div>
    )
}