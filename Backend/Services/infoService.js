import db from "../Models/db.js";

class infoService {
  async getCities() {
    const cities = (await db.query("select * from locations")).rows;
    const response = [];
    cities.forEach((city) => response.push({ id: city.name, name: city.name }));
    return response;
  }
  async getSizes() {
    const sizes = (await db.query("select * from sizes order by size desc"))
      .rows;
    const response = [];
    sizes.forEach((size) =>
      response.push({
        id: size.size,
        name: `${size.size} | ${size.dimensions} см`,
      })
    );
    return response;
  }
}

export default new infoService();
