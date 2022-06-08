const pool = require('../utils/pool');
module.exports = class Cat {
  id;
  cat_name;
  cat_type;
  birth_year;
  lives;
  is_sidekick;
  constructor({ id, cat_name, cat_type, birth_year, lives, is_sidekick }) {
    this.id = id;
    this.cat_name = cat_name;
    this.cat_type = cat_type;
    this.birth_year = birth_year;
    this.lives = lives;
    this.is_sidekick = is_sidekick;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM cats;');
    return rows.map((row) => new Cat(row));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM cats WHERE id=$1;', [id]);
    if (!rows[0]) return null;

    return new Cat(rows[0]);
  }
};
