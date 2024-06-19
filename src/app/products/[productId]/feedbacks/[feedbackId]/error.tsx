'use client'
export default function FeedBackDetailsErorr({
    error,
     reset}: {
    error: Error,
    reset: () => void,
}) {
    return (
        <div className="flex flex-1 justify-center items-center">
            <h1>Error: {error.message} </h1>
            <button onClick={reset}>Retry</button>
        </div>
    );
}