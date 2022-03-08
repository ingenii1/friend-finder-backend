const mongoose = require('mongoose');
const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');
const { addMovie, listMovie, updateMovie, deleteMovie } = require("./film/filmMethods");
const fs = require("fs");
const connection = require("./db/connection");

//using hideBin to make order of user input flexible
const argv = yargs(hideBin(process.argv)).argv;

const app = async() =>{
    try {
    //check third word for "add"
    if (argv.add) {
      //use addMovie to upda
      const movie = await addMovie({
        title: argv.title,
        actor: argv.actor,
        year: argv.year,
      });
      console.log(`New movie added`);
    } else if (argv.delete) {
      //if one of the argvs is delete, use deleteOne() to find and delete
      deleteMovies({ title: argv.title });
      console.log("Movie deleted");
    } else if (argv.list) {
      //list all collection
      console.log("Here's your list");
      listMovies();
    } else if (argv.edit) {
      //if edit, use title to find and update to --update value
      editMovie(argv.title, argv.update);
      console.log("Movie updated");
    }

    // else if (command === "delete")

    // addMovie(movieArray, {title: yargs.argv.title, actor: yargs.argv.actor});

    // else if (process.argv[2] === 'list'){
    //     listMovies(movieArray)
    // }
    // else if (process.argv[2] === 'delete'){
    //     console.log(process.argv[3])
    //     deleteMovies(movieArray, process.argv[3])

    // }
    // else if (process.argv[2] === 'edit' && process.argv[4] === 'to') {
    //     editMovie(movieArray, process.argv[3], process.argv[5])
    // }
  } catch (error) {
    console.log(error);
  }
};

app()