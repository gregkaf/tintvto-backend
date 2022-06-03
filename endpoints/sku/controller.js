import { skuData } from "./out_vto.js";

export const getAll = async (_, res) => {
  res.send(skuData);
};
