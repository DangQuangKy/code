import NewsCard from "@/components/NewsCard"


const feedData = [
    {   id: '19',
        image: "https://picsum.photos/id/19/600/400",
        title: "New Tech Startup Raises $10 Million in Funding",
        description: "A promising young tech company has secured a significant investment to expand its operations and develop innovative products."
      },
      {
        id: '20',
        image: "https://picsum.photos/id/20/600/400",
        title: "Local Community Center Wins Award for Outstanding Service",
        description: "The community center has been recognized for its tireless efforts in providing essential resources and support to the local neighborhood."
      },
      {
        id: '21',
        image: "https://picsum.photos/id/21/600/400",
        title: "Global Climate Summit Ends with Renewed Commitments",
        description: "World leaders have reaffirmed their pledge to tackle the pressing issue of climate change, outlining new strategies and initiatives to reduce greenhouse gas emissions."
      }
]
export default function NewFeed() {
    return (
        <main className="w-600 p-4">
            <h1>main content</h1>
            {feedData.map((feed) => {
                return (
                    <NewsCard 
                    key={feed.title}
                    image={feed.image}
                    title={feed.title}
                    description={feed.description}
                    id={feed.id}
                    />
                )
            })}
        </main>
    )
}