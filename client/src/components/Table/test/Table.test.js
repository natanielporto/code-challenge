import React from "react";
import ReactDOM from "react-dom";
import Table from "..";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("renders the table component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Table tableName="test" tableHeaders={["1", "2", "3"]} beers={["1", "2", "3"]} averageTDWidth={150}/>, div);
  ReactDOM.unmountComponentAtNode(div); 
})

it("renders the right table name", () => {
  const { getByText } = render(<Table tableName="testTableName" tableHeaders={["1", "2", "3"]} beers={["1", "2", "3"]} averageTDWidth={150}/>);
  const tableName = getByText("testTableName");
  expect(tableName).toHaveTextContent("testTableName");
});

it("renders the right table name a second time", () => {
  const { getByText } = render(<Table tableName="differentTestTableName" tableHeaders={["1", "2", "3"]} beers={["1", "2", "3"]} averageTDWidth={150}/>);
  const tableName = getByText("differentTestTableName");
  expect(tableName).toHaveTextContent("differentTestTableName");
});

