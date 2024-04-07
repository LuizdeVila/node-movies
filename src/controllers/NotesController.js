const knex = require("../database/knex")

class NotesController {

  async index(request, response) {
    const { user_id } = request.params

    const allNotes = await knex("notes")
    .where({ "notes.user_id": user_id })
    .innerJoin("users", "notes.user_id", "users.id");

    response.json(allNotes)
  }

  async create(request, response) {
    const { title, description, rating } = request.body
    const { user_id } = request.params

    const ratingNumber = parseFloat(rating);
      if (isNaN(ratingNumber) || ratingNumber < 0 || ratingNumber > 5) {
        return response.status(400).json({ error: "Rating deve ser um número entre 0 e 5" });
    }

    const [note_id] = await knex("notes").insert({
      title,
      description,
      rating: ratingNumber,
      user_id
    })

    response.json()
  }


  async delete(request, response) {
    const { id } = request.params;

    await knex("notes").where({ id }).delete()

    return response.json()
  }
}

module.exports = NotesController