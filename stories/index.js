import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import app from "../app/components/App";
import bookItem from "../app/components/BookItem";

storiesOf("Main App", module).add("default", () => <app.App />);
storiesOf("Book Item", module).add("default", () => <bookItem.view />);
