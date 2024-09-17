import Image from "next/image";



const UserCard = ({ type }: { type: string }) => {
    return (
        <div>
            <div className="rounded-2xl   p-4 flex-1 min-w-[130px]">
                <div className="flex justify-between items-center">
                    <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
                        2024/25
                    </span>
                    <Image src="/more.png" alt="" width={20} height={20} />
                </div>
                <h1 className="text-2xl font-semibold my-4">1,234</h1>
                <h2 className="capitalize text-sm  text-green-900 font-semibold">{type}s</h2>
            </div>
        </div>
    );
};

export default UserCard;