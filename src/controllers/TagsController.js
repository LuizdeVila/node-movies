const knex = require("../database/knex")

class TagsController {
  async create(request, response) {
    const { name } = request.body
    const { user_id } = request.params
    const { note_id } = request.params

    await knex("tags").insert({
      name,
      note_id,
      user_id
    })

    response.json()
  }

  async show(request, response) {
    const { id } = request.params;

    const showTag = await knex("tags").where({ id })

    return response.json(showTag)
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("tags").where({ id }).delete()

    return response.json()
  }
}

module.exports = TagsController