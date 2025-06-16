import { NextResponse } from "next/server";
import {RawCar, FormattedCar} from "../../entities/types/Car"

async function GetCars(request: Request) {
  const { searchParams } = new URL(request.url);
  const apiURL = new URL("https://testing-api.ru-rating.ru/cars");

  //лимит и страницы в параметрах запроса
  apiURL.searchParams.append("_limit", "12");
  apiURL.searchParams.append("_page", searchParams.get("_page") || "1");
  //сортировка
  const sort = searchParams.get("_sort");
  const order = searchParams.get("_order");

  if (sort && order) {
    apiURL.searchParams.append("_sort", sort);
    apiURL.searchParams.append("_order", order);
  }
  try {
    const res = await fetch(apiURL.toString());
    if (!res.ok) {
      throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }
    const data: RawCar[] = await res.json();
    const totalCount = res.headers.get("X-Total-Count") || "0";

    const formattedCars: FormattedCar[] = data.map((car, index) => ({
      id: index + 1,
      name: `${car.mark_id} ${car.folder_id}`,
      price: car.price,
      image: car.images.image[0]
    }));

    return NextResponse.json({
      products: formattedCars,
      meta: {
        totalCount: Number(totalCount),
        currentPage: Number(searchParams.get("_page") || 1),
        perPage: 12,
        totalPages: Math.ceil(Number(totalCount) / 12),
      },
    });
  } catch (error) {
    console.error("Failed to fetch cars:", error);
    return NextResponse.json(
      { error: "Не удалось загрузить данные об автомобилях" },
      { status: 500 }
    );
  }
}

export default GetCars;
