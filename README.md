# read-challenge

Used Create-react-app
How to use storyboard: https://storybook.js.org/basics/guide-react/
Start storybook: npm run storybook

Todo:
Du behöver en state med savedValue och currentValue

Sen två views

En visar bara savedValue, den andra visar bara currentValue. Börja där så att båda syns.

Sen lägger du till en isSaved state variable som du sätter till true/false när du klickar på save eller edit eller liknande.

this.state.isSaved ? getTextCompoment() : getInputComponent()

