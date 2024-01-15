import { TPlayer } from "@/app/utils/types/competition";
import Image from "next/image";

export const Player = (player: TPlayer) => {
    const { imgUrl, name } = player;
    return <div>
        <div className="-12 w-12 relative">
            <Image src={imgUrl} alt={name} layout="fill" />
        </div>
        <div>{name}</div>
    </div>
}