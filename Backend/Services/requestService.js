import db from "../Models/db.js";

class requestService {
  async getIds(fromArchive = false) {
    if (fromArchive) {
      const response = await db.query(
        "select id from request where status = 'Завершено' or status = 'Отменено'"
      );
      return response.rows;
    }
    const response = await db.query(
      "select id from request where status != 'Завершено' and status != 'Отменено'"
    );
    return response.rows;
  }

  async getById(id) {
    const response = await db.query("select * from request where id = $1", [
      id,
    ]);
    return response.rows[0];
  }
  async setDelivery(requestId, deliveryId, rejected = false) {
    if (rejected) {
      const response = await db.query(
        "UPDATE request set status = 'Отменено' where id =$1",
        [requestId]
      );
      return true;
    } else {
      const response = [
        await db.query(
          "insert into request_delivery(request_id, delivery_id) values($1, $2)",
          [requestId, deliveryId]
        ),
        await db.query(
          "UPDATE request set status = 'Обработано' where id =$1",
          [requestId]
        ),
      ];
      return true;
    }
  }
  async setRequest(request) {
    const id = (
      await db.query(
        "select (select id from request order by id desc limit 1)+1 as id;"
      )
    ).rows[0].id;
    if (!id) {
      return false;
    }
    const reqName = request.Name.split(" ");
    let insertName = reqName[0];
    for (let i = 1; i < reqName.length; i++) {
      insertName = insertName + ` ${reqName[i][0]}.`;
    }

    const insert = await db.query(
      `insert into request(id, clients_phone, clients_name, location_from, location_to, size, weight, status)
      values ($1, $2, $3, $4, $5, $6, $7,'В обработке')`,
      [
        id,
        request.Phone,
        insertName,
        request.CityFrom,
        request.CityTo,
        request.Size,
        request.Weight,
      ]
    );
    if (insert) {
      return id;
    }
    return false;
  }
}

export default new requestService();
