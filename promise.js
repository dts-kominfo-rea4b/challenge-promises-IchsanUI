const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi,namaFilm) => {
  try {
    const TheaterIXX = await promiseTheaterIXX();
    const TheaterVGC = await promiseTheaterVGC();
    let result = 0;
    return new Promise((resolve) => {
      result += TheaterVGC.filter((item) => item.hasil == emosi).length;
      result += TheaterIXX.filter((item) => item.hasil == emosi).length;
      resolve(result);
    });

    
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  promiseOutput,
};
