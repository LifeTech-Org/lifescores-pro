import { TCompetition } from '@/app/utils/types/competition';
import Image from 'next/image';
import Link from 'next/link';

export default function Competition({ competition }: { competition: TCompetition }) {
    return <Link href="/admin/new" className="bg-zinc-900/60 rounded-md flex flex-col h-44 gap-2 hover:bg-zinc-900/30">
        <div className='flex flex-1 items-center justify-center'>
            <Image src={competition.img} alt={competition.name} height={100} width={100} className='rounded-full' />
        </div>
        <div className='h-10 flex items-center justify-between px-4'>
            <h3 className='text-white text-sm'>{competition.name}</h3>
        </div>
    </Link>
}
