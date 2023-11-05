# API relay 
### made with node.js/express

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/aaronhalstonlee/api_server)


## What is this?
esentially it is a custom API that acts as an interface between my front end and the weather API that i had obtained an API key from. this allows me to upload my project to github for version control without exposing my key or using the complicated-for-a-code-newbie actions/workflows/secrets in github.

i was needing a way to put this project into version control, but keep my api key secure. since nothing is safe in the front end, i needed a solution on the backend to keep my secrets secret. I stumbled upon Dave Gray's [how to hide api keys with node JS](https://youtu.be/uk9pviyvrtg?si=TnySLuj-T1ZMFRYL). he did a great job, so i followed along and adjusted things here and there to account updated packages and how i wanted to use my project. so a huge thank you to Dave for the help. and all credit to him for this solution. 