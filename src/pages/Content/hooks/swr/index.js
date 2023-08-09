import { globalGetService } from '../../utils/globalApiServices';

const getAllChains = () => {
  return new Promise((resolve, reject) =>
    globalGetService('/chains/')
      .then((res) => {
        resolve(res.data.items);
      })
      .catch((err) => {
        reject(err);
      })
  );
};

export { getAllChains };
