
let frutas = [
    {
        'id':0,
        'nombre':'manzana'
    },
    {
        'id':1,
        'nombre':'kiwi'
    } ,
    {
        'id':2,
        'nombre':'pomelo'
    },
    {
        'id':3,
        'nombre':'naranja'
    },
    {
        'id':4,
        'nombre':'durazno'
    },
    {
        'id':5,
        'nombre':'banana'
    },
    {
        'id':6,
        'nombre':'frutilla'
    },
    {
        'id':7,
        'nombre':'mandarina'
    },
    {
        'id':8,
        'nombre':'anana'
    },
    {
        'id':9,
        'nombre':'melon'
    }
]

const index = async (req,res) => {
    return res.render('../src/views/frutas/index', {frutas});
};

const show = async (req,res) => {
    const id = req.params.id
    const elemento = frutas[id]
    return res.render('../src/views/frutas/show', {elemento});
};

const edit = async (req,res) => {
    const id = req.params.id
    const elemento = frutas[id]
    return res.render('../src/views/frutas/edit', {elemento});
};

const create = async (req,res) => {
    return res.render('../src/views/frutas/create');
};

//API

const store = async (req,res) => {
    const {nombre,id} = req.body;
    if (nombre) {
        frutas.unshift({id,nombre})
        return res.status(200).json({'status':200, id, nombre, 'msg':'Creado correctamente'})
    } else {
        return res.status(404).json({'msg':'No se recibieron los datos'})
    }
};

const update = async (req,res) => {
    const {nombre} = req.body;
    const id = req.params.id;
    if (id) {
        const actualizado = frutas.splice(id,1,{'id':id,'nombre':nombre})
        return res.status(201).json({'status':201, actualizado, 'msg':'Editado correctamente'})
    } else {
        return res.status(404).json({'msg':'No se recibieron los datos'})
    }
};

const destroy = async (req,res) => {
    const id = req.params.id;
    const eliminado = frutas.splice(id,1)
    return res.status(200).json({'status':200,eliminado, 'msg':'Eliminado correctamente'})
};

module.exports = {
    index,
    create,
    show,
    edit,
    store,
    destroy,
    update
};