import React from "react"
import { Highlight } from "react-instantsearch-dom"
import PropTypes from "prop-types"

const Hit = ({ hit }) => {
  return (
    <>
      <img src={hit.image} alt={hit.name} />
      <h4>
        <Highlight attribute="name" hit={hit} />
      </h4>
      <Highlight attribute="description" hit={hit} />
      <h2>${hit.price}</h2>
    </>
  )
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
}

export default Hit
