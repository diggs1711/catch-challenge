import React, { useEffect, useState } from 'react'
import DropdownSelect from '../../components/DropdownSelect/Index'
import ProductCard, {ProductDetails} from '../../components/ProductCard/Index'
import GridList from '../../components/GridList/Index'
import { PRODUCT_LIST_URL } from '../../constants/urls'

type ProductPageSortOptions = 'High' | 'Low'

const ProductsPage = () => {
    const [products, setProducts] = useState<ProductDetails[]>([])
    const [selectOption, setSelectedOption] = useState<ProductPageSortOptions>('High')

    const getProducts = async () => {
        const results = await fetch(PRODUCT_LIST_URL)
        const products = await results.json()
        return products.results
    }

    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value as ProductPageSortOptions
        setSelectedOption(val)
    }

    useEffect(() => {
        getProducts().then((products: ProductDetails[]) => setProducts(products))
    }, [])

    const options = [
        {name: 'High', id: '1'},
        {name: 'Low', id: '2'}
    ]

    const testDetails = {
        "id": "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
        "name": "Buy Olaplex No. 3 Hair Perfector",
        "salePrice": 3145,
        "retailPrice": 5000,
        "imageUrl": "product_image.jpg",
        "quantityAvailable": 100
      }

    const productCards = products.sort((a, b) => selectOption == 'High' ? b.salePrice -a.salePrice : a.salePrice -b.salePrice).map(product => <ProductCard key={product.id} details={product} />)

    return (
        <div>
            <DropdownSelect onChange={e =>  handleOptionChange(e)} options={options} value={selectOption} />
            <GridList items={productCards} />
        </div>
    )
}

export default ProductsPage
