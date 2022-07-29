'use strict';

class Collection {
  constructor(model, app, routeName){
    this.model = model;
    this.routeModel(app, routeName);
  }

async read (req, res){
    let options = {};
    let records = null;
    const id = req.params.id;
        if (id) {
            options['where'] = { id };
            records = await this.model.findOne(options);
        } else {
            records = await this.model.findAll(options);
        }
        res.status(200).send(records);
    }

  async create(req, res) {
    try{
      let newCollection = await this.model.build(req.body).save();
      res.status(200).send(newCollection);
    }catch (error){
      console.error(error);
    }
  }


  async update(req, res) {
    const id = req.params.id;
    try {
        if (!id) throw new Error('No target id')
        let output = await this.model.update(req.body, { where: { id } });
        res.status(200).send(output);
    } catch (error) {
        res.status(500).send(error);
    }
}

  async delete(req, res) {
    const id = req.params.id
    try {
        if (!id) throw new Error('No target id')
        await this.model.destroy({ where: { id } })
        res.status(200).send('I destroy it');
    } catch (error) {
        res.status(500).send(error);
    }
}


routeModel = (app, routeName) => {
    app.post(`/${routeName}`, (req, res) => this.create(req, res));
    app.get(`/${routeName}`, (req, res) => this.read(req, res));
    app.get(`/${routeName}/:id`, (req, res) => this.read(req, res));
    app.put(`/${routeName}/:id`, (req, res) => this.update(req, res));
    app.delete(`/${routeName}/:id`, (req, res) => this.delete(req, res));
}
}


module.exports = Collection;
