'use client'
function getRandom(num: number): number {
    return Math.floor(Math.random() * num);
}
function FeedBackDetails({params} : {
    params: {
        feedbackId : string,
        productId : string
    }
}) {
    const random = getRandom(2);
    if (random === 1) {
        throw new Error ('Can not feedback')
    }
    return ( 
        <div className="flex flex-col items-center justify-start p-4 w-screen h-screen">
            <h1>Feedback Details</h1>
            <p>Feedback ID: {params.feedbackId}</p>
            <p>Product ID: {params.productId}</p>
        </div>
     );
}

export default FeedBackDetails;