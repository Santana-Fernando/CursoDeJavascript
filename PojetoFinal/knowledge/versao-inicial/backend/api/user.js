const bcryṕt = require('bcrypt-nodejs')

module.exports = app => {
    const { existisOrError, notExistisOrError, equalsOrError } = app.api.validation

    const encryptPassword = password => {
        const salt = bcryṕt.genSaltSync(10)
        return bcryṕt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const user = { ...req.body }
        if(req.params.id) user.id = req.params.id

        if(!req.originalUrl.startsWith('/users')) user.admin = false
        if(!req.user || !req.user.admin) user.admin = false

        try {
            existisOrError(user.name, 'Nome não informado!')
            existisOrError(user.email, 'E-Mail não informado!')
            existisOrError(user.password, 'Senha não informado!')
            existisOrError(user.confirmPassword, 'Confirmação de Senha inválida!')
            equalsOrError(user.password, user.confirmPassword, 'Senhas não batem!')

            const userFromDB = await app.db('users')
                .where({ email: user.email }).first()
            
            if(!user.id) {
                notExistisOrError(userFromDB, 'Usuário já cadastrado.')
            }
        } catch (msg) {
            return res.status(400).send(msg)
        }

        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        if(user.id){
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .whereNull('deletedAt')
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('users')
        .select('id', 'name', 'email', 'admin')
        .whereNull('deletedAt')
        .then(users => res.json(users))
        .catch(err => res.status(500).send(err))

    }

    const getById = (req, res) => {
        const idUser = req.params.id
        app.db('users')
        .select('id', 'name', 'email', 'admin')
        .where({ id: idUser })
        .whereNull('deletedAt')
        .first()
        .then(users => res.json(users))
        .catch(err => res.status(500).send(err))

    }

    const remove = async (req, res) => {
        try {
            const articles = await app.db('articles')
                .where({ userId: req.params.id })
            notExistisOrError(articles, "O usuário possui artigos registrados.")

            const rowsUpdated = await app.db('users')
                .update({deletedAt: new Date()})
                .where({ id: req.params.id})
            
            existisOrError(rowsUpdated, "Usuário não encontrado.")

            res.status(204).send()
        } catch (msg) {
            res.status(400).send(msg)
        }
    }

    return { save, get, getById, remove }
}