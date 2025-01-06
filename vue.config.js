module.exports = {
    css: {
      
      loaderOptions: {
        sass: { //the change was made here (match the option name with file extension)
          
          prependData: `
          @import "@/components/Navbar/NavBar.scss";         
        `
      }
    }
  }
}