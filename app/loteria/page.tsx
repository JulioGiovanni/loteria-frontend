'use client';
import { useGetFromAPI } from '@/lib/api.service';
import { Skeleton } from '@/components/ui/skeleton';
import TablaLoteria from '@/components/TablaLoteria';

const LoteriaTablas = () => {
  const { data, isLoading, isFetching, isError } = useGetFromAPI();
  console.log(data);
  if (isLoading || isFetching) {
    return (
      <div className="flex flex-col gap-4">
        <Skeleton className="w-full h-[40px]" />
        <Skeleton className="w-full h-[40px]" />
        <Skeleton className="w-full h-[40px]" />
        <Skeleton className="w-full h-[40px]" />
      </div>
    );
  }
  if (!data) {
    return <div>No hay datos</div>;
  }
  if (isError) {
    return <div>Ha ocurrido un error</div>;
  }

  return (
    <div className=" flex flex-grow flex-wrap gap-4 justify-center">
      {data.map((tabla: any) => (
        <TablaLoteria key={tabla.id} Tabla={tabla} />
      ))}
    </div>
  );
};

export default LoteriaTablas;
