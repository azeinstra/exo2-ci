import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Page d'accueil</title>
      <h1 style={headingStyles}>
        Bravo
        <br />
        <span style={headingAccentStyles}>Site Gatsby opérationnel</span>
      </h1>
    </main>
  )
}

export default IndexPage
