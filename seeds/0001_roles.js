
exports.seed = function(knex, Promise) {

  return knex('roles').insert([
        {id: 1, name: 'Student'},
        {id: 2, name: 'PM'},
        {id: 3, name: 'TA'}
      ]);
};
