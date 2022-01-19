# Day 7 AM: Basic Objection Models & Queries

This morning we'll get started using [Objection.js](https://vincit.github.io/objection.js/). You can create a new database with ElephantSQL, or use the same database credentials as yesterday. If you do the latter, make sure to **rollback** before trying to doing today's exercises. There is already a full set of migrations and seed data installed that we'll use to practice Objection (So you'll need to add your database creds to the .env and run `npm run migrate && npm run seed` again). Once you've set up your database, follow the steps below.

### Writing Models

Our database has 3 tables: users, relations, and pets. Users has a has-many relation with pets, and pets has a belongs-to-one relation with users. Relations is a through table describing parent/child relations between users. Your jobs is to write these relations explicitly in the models (under `src/models`) for all three tables. The User model has been started for you already. Don't forget the `tableName` method of each class as well!

### Practicing Queries

Now that you have the basic models set up, Objection knows exactly how your database is structured. Let's practice writing some queries! Under `src/exercises` is a bunch of exercises to practice syntax for writing database queries. In each file you'll find some comments with directions. Complete exercises 00-07 to fetch some data from the database, and then `console.log` your results. To test your implementation type `node src/exercises/<EXERCISE>.js`, e.g. `node src/exercises/00_select.js`. If you're running low on time, make sure you get around to exercise 7: Joins!

# Day 7 PM: Advanced ORM Usage

Let's expand on our usage of Objection and add onto our models.

1. Add `.returning(*)` to this morning's implementation of `delete`, `patch`, and `insert`. Check that it outputs the data you expect.
2. Use `insertGraph` in exercise 8.
3. For each model, write a couple virtual attributes to simplify our database querying, then test these additions in exercise 9.
4. Practice using instance methods in exercise 10.
5. Implement a transaction in exercise 11. You can check that the rollback works correctly by deliberately causing an error: `throw new Error('Database interaction failed!')`.  https://vincit.github.io/objection.js/guide/transactions.html#creating-a-transaction


**Stretch Task**: Use [$beforeUpdate](https://vincit.github.io/objection.js/api/model/instance-methods.html#beforeupdate) on the BaseModel to set the updated_at column to the current time whenever data is updated.
