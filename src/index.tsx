import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { GlobalStyle } from 'theme'
import isPropValid from '@emotion/is-prop-valid'
import useStorageTheme from 'lib/hooks/useStorageTheme'
import { StyleSheetManager, ThemeProvider } from 'styled-components'

import { ApolloProvider } from '@apollo/client'
import { client } from 'graphql/services/apollo'

import News from 'pages/news/News'
import Article from 'pages/article/[slug]'
import { Switch } from 'components/general'
import { Header } from 'components/ui/Header'

import reportWebVitals from 'reportWebVitals'

const App: React.FC = () => {
  const { storageTheme, selectedTheme, toggleTheme } = useStorageTheme()

  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <ThemeProvider theme={selectedTheme}>
        <ApolloProvider client={client}>
          <Switch
            onChange={toggleTheme}
            checked={storageTheme === 'light' ? false : true}
            styles={{ position: 'fixed', top: '15px', right: '15px' }}
          />
          <GlobalStyle />
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<News />} />
              <Route path="/:article" element={<Article />} />
            </Routes>
          </BrowserRouter>
        </ApolloProvider>
      </ThemeProvider>
    </StyleSheetManager>
  )
}

const rootElement = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(rootElement).render(<App />)

reportWebVitals()
