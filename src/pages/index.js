import React from "react"
import Image from "../components/image"

import SEO from "../components/seo"

const IndexPage = () => (
  <div style={{ maxWidth: "100%", maxHeight: "100%" }}>
    <SEO title="Curtis Nollner" />
    <div style={{ zIndex: 0 }}>
      <Image />
    </div>
    <h1
      style={{
        position: "absolute",
        bottom: 0,
        left: 5,
        padding: 0,
        margin: 0,
        zIndex: 1,
        fontSize: 84,
        color: "white",
        fontWeight: 400,
        fontFamily: "sans-serif"
      }}
    >
      Curtis Nollner
    </h1>
  </div>
)

export default IndexPage
