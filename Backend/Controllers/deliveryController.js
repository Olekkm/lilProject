import deliveryService from "../Services/deliveryService.js";

class deliveryController {
  async getIds(req, res) {
    if (req.query.from && req.query.to) {
      const response = await deliveryService.getSuitable(
        req.query.from,
        req.query.to
      );
      res.json(response);
      return;
    }

    const response = await deliveryService.getIds();
    res.json(response);
    return;
  }
  async getById(req, res) {
    const response = await deliveryService.getById(req.params?.deliveryId);
    res.json(response);
  }
}

export default new deliveryController();
