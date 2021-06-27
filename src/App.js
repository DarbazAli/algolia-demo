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
  "35741763b23582022ffcdc590dc26c2f"
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
