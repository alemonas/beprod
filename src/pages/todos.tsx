import React from "react"
import { Link, PageProps } from "gatsby"
import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup"

import Layout from "../components/layout"

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <h1>todo list</h1>
    <ListGroup>
      <ListGroup.Item>todo 1</ListGroup.Item>
      <ListGroup.Item>todo 2</ListGroup.Item>
      <ListGroup.Item>
        <Button>hello there</Button>{" "}
      </ListGroup.Item>
    </ListGroup>
    <Link to="/">home</Link> <br />
  </Layout>
)

export default IndexPage
