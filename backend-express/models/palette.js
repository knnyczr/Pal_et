// pal_db is the database where the palettes are being collected/stored
const pal_db = require('../config/connection');

//exporting all the modules
module.exports ={
  showAll(){
    return pal_db.many(`
      SELECT *
      FROM pals
      `);
  },
  getOne(id){
    return pal_db.one(`
      SELECT *
      FROM pals
      WHERE pals.id=$1
      `, id)
  },
  createOne(){

  },
  update(){

  },
  delete(){

  }
}
