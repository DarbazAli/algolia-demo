import React from "react"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
} from "react-instantsearch-dom"

import Hit from "./Hit"

const searchClient = algoliasearch(
  "J68PQFE9RK",
  "546fae9bc9bf78fd691c2172e6112d26"
)

const App = () => {
  return (
    <div className="app">
      <h1>React InstantSearch eCommerce demo</h1>
      <InstantSearch indexName="algolia_demo" searchClient={searchClient}>
        <SearchBox />
        <Hits hitComponent={Hit} className="hit-container" />
        <Pagination />
      </InstantSearch>
    </div>
  )
}

export default App
