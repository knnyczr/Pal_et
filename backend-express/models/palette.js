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
      `, id);
  },
  createOne(palette){
    return pal_db.one(`
      INSERT INTO pals(hex1, hex2, hex3, hex4, hex5)
      VALUES($1, $2, $3, $4, $5)
      RETURNING*
    `, [palette.hex1, palette.hex2, palette.hex3, palette.hex4, palette.hex5]
    );
  },
  update(){

  },
  destroy(id){
    return pal_db.none(`
      DELETE FROM pals
      WHERE pals.id = $1
    `, id);
  }
}
