import Image from "next/image";
import Link from "next/link";

export const getPostData = (id: string): any => {
  const feedData = [
    {
      id: "19",
      image: "https://picsum.photos/id/19/600/400",
      title: "New Tech Startup Raises $10 Million in Funding",
      description:
        "A promising young tech company has secured a significant investment to expand its operations and develop innovative products.",
    },
    {
      id: "20",
      image: "https://picsum.photos/id/20/600/400",
      title: "Local Community Center Wins Award for Outstanding Service",
      description:
        "The community center has been recognized for its tireless efforts in providing essential resources and support to the local neighborhood.",
    },
    {
      id: "21",
      image: "https://picsum.photos/id/21/600/400",
      title: "Global Climate Summit Ends with Renewed Commitments",
      description:
        "World leaders have reaffirmed their pledge to tackle the pressing issue of climate change, outlining new strategies and initiatives to reduce greenhouse gas emissions.",
    },
  ];
  const data = feedData.find((post) => post.id === id);
  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque aliquet nunc eget egestas. Ut suscipit erat non erat tristique, dignissim lacinia quam mattis. Donec vel venenatis libero. Phasellus elementum, libero quis ornare commodo, magna dui tristique enim, sit amet interdum magna arcu et felis. Suspendisse imperdiet nulla et gravida pulvinar. Nullam feugiat scelerisque nunc, dictum tincidunt ante viverra in. Nulla facilisi. In et ultrices erat. Pellentesque finibus sem in ipsum pretium bibendum.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent vel odio placerat, suscipit arcu commodo, accumsan dolor. Donec dapibus egestas auctor. Etiam lorem purus, mollis eu aliquet ut, imperdiet ut nibh. Sed posuere turpis est. Proin nisi lacus, ullamcorper sit amet dignissim sed, pulvinar hendrerit ex. Proin libero elit, sollicitudin at convallis et, rhoncus tristique augue. Cras elementum felis ligula, pharetra rhoncus nisl porttitor vitae. Quisque quis libero mollis, tempus est quis.`;
  return { ...data, content };
};
export default function PhotoPage({
  params,
}: {
  params: {
    photoId: string;
  };
}) {
  const postData = getPostData(params.photoId);
  return (
    <div className="flex w-full bg-black">
      <Link className="text-white mx-8 p-4" href={"/feed"} replace>
        Back
      </Link>
      <Image
        src={`https://picsum.photos/id/${params.photoId}/900/600`}
        width={900}
        height={600}
        alt="image"
      />
      <div className="flex flex-col text-white p-4 pt-6">
        <h1 className="text-2xl">{postData?.title}</h1>
        <p className="text-md mt-8">{postData?.content}</p>
      </div>
    </div>
  );
}
