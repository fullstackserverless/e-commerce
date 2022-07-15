import React from "react"
import { Search } from "./"

export const SearchExample = () => {
    return <Search
        onChange={(txt) => console.log(txt)}
        onSearch={(txt) => console.log('Search: ', txt)} />
}