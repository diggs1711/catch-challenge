import React, { useEffect, useState } from 'react'
import DropdownSelect from '../../components/DropdownSelect/Index'
import ProductCard, {ProductDetails} from '../../components/ProductCard/Index'
import GridList from '../../components/GridList/Index'
import { PRODUCT_LIST_URL } from '../../constants/urls'
import Container from '../../components/Container/Container'
import GridListHeader from '../../components/GridListHeader/Index'
import { Helmet } from 'react-helmet'

type ProductPageSortOptions = 'High' | 'Low'

type ProductMetadata = {
    "query": string
      "total": number
      "page": string
      "pages": number
}
type ProductData = {
    metadata?: ProductMetadata
    results: ProductDetails[] | []
}

const initalData: ProductData = {
    metadata: undefined,
    results: []
}

const ProductsPage = () => {
    const [productData, setProductData] = useState<ProductData>(initalData)
    const [selectOption, setSelectedOption] = useState<ProductPageSortOptions>('High')
    const [loading, setLoading] = useState(false)

    const getProductData = async () => {
        setLoading(true)
        const results = await fetch(PRODUCT_LIST_URL, {
            method: 'GET',
            credentials: 'omit'
        })
        return await results.json()
    }

    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value as ProductPageSortOptions
        setSelectedOption(val)
    }

    useEffect(() => {
        getProductData().then((products: ProductData) => {
            setProductData(products)
            setLoading(false)
        })
    }, [])

    const options = [
        {name: 'High', id: '1'},
        {name: 'Low', id: '2'}
    ]

    const productCards = productData.results.sort((a, b) => selectOption === 'High' ? b.salePrice -a.salePrice : a.salePrice -b.salePrice).map(product => <ProductCard key={product.id} details={product} />)

    if (loading) return <div>Loading...</div>

    if (!productData || productData.results.length === 0) return null

    return (
        <>
            <Helmet>
                <meta name="description" content={productData.metadata?.query} />
            </Helmet>
        <Container>
            <GridListHeader title={productData?.metadata?.query || ''} />
            <DropdownSelect onChange={e =>  handleOptionChange(e)} options={options} value={selectOption} />
            <GridList items={productCards} />
            </Container>

            </>
    )
}

export default ProductsPage
