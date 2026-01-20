// postDetail.tsx

import { useParams } from "react-router-dom"

export default function postDetail() {

    const { id } = useParams();

    return (
        <div className="mt-8 border rounded bg-gray-100 ">
            <h1 className="text-2xl mb-2 font-semibold">Post Detail</h1>
            <p>Showing details of post ID: <span className="font-bold font-mono">{id}</span></p>        
        </div>
    )
}