import infoService from "../Services/infoService.js";

class infoController {
  async getCities(req, res) {
    const response = await infoService.getCities();
    res.json(response);
  }
  async getSizes(req, res) {
    const response = await infoService.getSizes();
    res.json(response);
  }
}

export default new infoController();
