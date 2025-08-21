import Image from 'next/image';

type WeatherCardProps = {
    data: {
        name: string;
        main?: {
        temp?: number;
        };
        weather?: Array<{
        icon?: string;
        description?: string;
        }>;
    };
    loading: boolean;
    error: string | null;
}

export default function WeatherCard({ data, loading, error }: WeatherCardProps) {

  return (
    <div className="p-6 max-w-lg mx-auto shadow-md rounded-xl">

      {/* Current Weather */}
      {data && !loading && !error && (
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold">{data.name}</h3>
          <p className="text-4xl font-bold">
            {data.main?.temp !== undefined ? Math.round(data.main.temp) : '--'}°C
          </p>
          <p className="capitalize">{data.weather?.[0]?.description ?? ''}</p>
          <Image
            src={`https://openweathermap.org/img/wn/${data.weather?.[0]?.icon ?? '01d'}@2x.png`}
            alt={data.weather?.[0]?.description ?? ''}
            width={100}
            height={100}
            className="mx-auto"
          />
        </div>
      )}
    </div>
  );
}