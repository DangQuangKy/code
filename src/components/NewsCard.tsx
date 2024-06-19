import Image from "next/image";
import Link from "next/link";

export default function NewsCard(props: {
    image: string;
    title: string;
    description: string;
    id: string;
}) {
    return (
        <div className="bg-white rounded-lg shadow mt-4 w-[600px]">
            <Link href={`/photo/${props.id}`}>
                <Image className="rounded-t-lg cursor-pointer"
                src={props.image} alt="image" width={600}
                height={400}/>
                <div className="p-4">
                    <h1 className="font-bold text-[18px] cursor-pointer">{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </Link>
        </div>
    );
}