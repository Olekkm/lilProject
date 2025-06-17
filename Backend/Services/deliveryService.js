import db from "../Models/db.js";

class deliveryService {
  async getIds() {
    const ids = await db.query("select id from delivery order by id");
    return ids.rows;
  }

  async getSuitable(locationFrom, locationTo) {
    const suitable = await db.query(
      `with max_bound as (select delivery_id, max(stage) from path group by delivery_id), bounds as
(select a.delivery_id, a.max, c.location as start_location, b.location as final_location from max_bound a left join path b on (a.delivery_id = b.delivery_id and a.max = b.stage)
join path c on (a.delivery_id = c.delivery_id and 1 = c.stage))

SELECT DISTINCT d1.delivery_id,
b.start_location,
b.final_location
FROM path d1
JOIN path d2
  ON d1.delivery_id = d2.delivery_id
  left join bounds b
  on d1.delivery_id = b.delivery_id
  left join delivery d
  on d1.delivery_id = d.id
WHERE 
  d1.location = $1
  AND d2.location = $2
  AND d1.stage < d2.stage
  and d.status = 'Создано';`,
      [locationFrom, locationTo]
    );
    return suitable.rows;
  }

  async getById(id) {
    const response = {
      data: (await db.query("select * from delivery where id = $1", [id]))
        .rows[0],
      path: (
        await db.query(
          "SELECT stage, location FROM path where delivery_id = $1 order by stage",
          [id]
        )
      ).rows,
      requests: (
        await db.query(
          "SELECT request_id FROM request_delivery where delivery_id = $1",
          [id]
        )
      ).rows,
    };
    return response;
  }
}

export default new deliveryService();
