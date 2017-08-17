import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import app from "../app/components/App";
import challenges from "../app/components/Challenges";

storiesOf("Main App", module).add("default", () => <app.App />);
storiesOf("Challenges", module).add("default", () => <challenges.Challenges />);
