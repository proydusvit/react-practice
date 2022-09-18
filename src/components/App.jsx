import { Component } from "react";
import SelectBasicExample from "./SelectComponents/Select";
import Images from "./ImagesComponents/Images";
import { FavoriteImg } from "./FavoriteComponent/Favorite";

class App extends Component {

  state = {
    selected: '',
    favorites: [],

  }

  handleChange = (e) => {
    this.setState({ selected: e.target.value })
    console.log(e.target.value);

  }
  handleAddFavorite = (img) => {
    const isDublicate = !!this.state.favorites.find(elem => elem.id === img.id)

    if (isDublicate)
    {
      console.log(isDublicate);
      const yes = window.confirm("хочеш ще?")
    
      if (!yes) {
        return 
      }
     
    
   }
      this.setState(prevState => ({ favorites: [...prevState.favorites, img] }))
    


  }
  handleDelete = ({ target: { id } }) => {
    console.log(id)
    this.setState(prevState => ({
      favorites: prevState.favorites.filter(elem => elem.id.toString() !== id)
    }))  
  }



  render() {
    const { handleChange, handleAddFavorite, handleDelete } = this;
    const { favorites, selected } = this.state;
    return (
      <div>
        <SelectBasicExample handleChange={handleChange} />
        {selected === 'images' && <Images handleAddFavorite={handleAddFavorite} />}
        {selected === 'favorite' && <FavoriteImg img={favorites} handleDelete={handleDelete} />}
      </div>
    );
  }
};
export default App;