import requestService from "../Services/requestService.js";

class requestController {
  async getIds(req, res) {
    const response = await requestService.getIds(req.query.from == "archive");
    res.json(response);
  }
  async getById(req, res) {
    const response = await requestService.getById(req.params?.requestId);
    res.json(response);
  }
  async setRequest(req, res) {
    if (req.body?.requestId) {
      const response = await requestService.setDelivery(
        req.body?.requestId,
        req.body?.deliveryId,
        req.body?.rejected
      );
      res.json(response);
    } else {
      const response = await requestService.setRequest(req.body);
      res.json(response);
    }
  }
}

export default new requestController();
