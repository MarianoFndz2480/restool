import ProductModelFactory from '../../models/productModel'

export const handler = async (event) => {
    const { id } = event.arguments

    const ProductModel = ProductModelFactory.getModelIntance()

    const data = await ProductModel.findById(id)

    return data
}
