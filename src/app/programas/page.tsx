import Filters from '@/components/Filters';
import SummaryCard from '@/components/SummaryCard';

export default function Programas() {
    return (
        <div className="flex flex-col h-full w-full text-center mx-8" >
            <p className='text-start my-10 font-bold text-lg' >Pesquisar por programas</p>
            <Filters />
            <div className='w-full flex justify-center mt-20'>
                <SummaryCard label='Total produções' value='200' />
                <SummaryCard label='I Geral' value='17,43' />
                <SummaryCard label='I Restrito' value='16,45' />
                <SummaryCard label='I Não Restrito' value='0,99' />
            </div>


        </div>
    );
}