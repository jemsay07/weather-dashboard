import React from 'react'
import Image from 'next/image';

type ForeCastListProps = {
  data: {
    list: Array<ForecastItem>;
  } | null;
  loading: boolean;
  error: string | null;
}

interface ForecastItem {
  dt: number;
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

export default function ForecastList({data, loading, error}: ForeCastListProps) {
  return (
    <div>

      {/* Forecast */}
      {data && !loading && !error && Array.isArray(data.list) && (
        <div>
          <h4 className="text-md font-semibold mb-2">5-Day Forecast</h4>
          <div className="grid grid-cols-2 gap-4">
            {data.list
              .filter((_: ForecastItem, idx: number) => idx % 8 === 0)
              .map((f: ForecastItem, idx: number) => (
                <div
                  key={idx}
                  className="p-3 bg-gray-100 rounded text-center shadow-sm"
                >
                  <p className="font-semibold">
                    {f.dt ? new Date(f.dt * 1000).toLocaleDateString("en-US", {
                      weekday: "short",
                    }) : ''}
                  </p>
                  <Image
                    src={`https://openweathermap.org/img/wn/${f.weather?.[0]?.icon ?? '01d'}@2x.png`}
                    alt={f.weather?.[0]?.description ?? ''}
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                  <p className="font-bold">
                    {f.main?.temp !== undefined ? Math.round(f.main.temp) : '--'}°C
                  </p>
                  <p className="capitalize text-sm">
                    {f.weather?.[0]?.description ?? ''}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
