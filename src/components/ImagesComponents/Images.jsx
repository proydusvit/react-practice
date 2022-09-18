import { Component } from "react";
import { getImages } from "API/api";
import PropTypes from 'prop-types';


class Images extends Component {
static propTypes = { handleAddFavorite: PropTypes.func.isRequired}

    state = {
        email : '',
        query: '',
        img: [],
    }

    handleValue = ({ target: {value, name} }) => {
        
    this.setState({[name] : value})
    }
    handleSumbit = (e) => {
        e.preventDefault()
        getImages(this.state.query).then(res => this.setState(prevState => {return{img:[...prevState.img, ...res.hits] }}))
        

    }

    render() {
        const { query, email, img, } = this.state;
        const { handleValue, handleSumbit, } = this;
        const { handleAddFavorite } = this.props;
        

        return (
            <div>
            <form action="" onSubmit={handleSumbit}>

            <label htmlFor="">
                    <input type="text"
                        name="query"
                        value={query} onChange={handleValue}
                        placeholder="пошук"
                            />
               
            </label>

             {/* <label htmlFor="">
                <input type="text"
                    name="email"
                        value={email} onChange={handleValue} />
                    
               
</label> */}
            </form>
                <div>
                    <ul>
                        {img.map((item) => {
                            const { webformatURL, id, tags } = item; return <li key={id} onClick={() => handleAddFavorite(item)}> <img src={webformatURL} alt={tags} width="300" /> </li>
                        } )}
                    </ul>
                    
                    
            </div>
</div>
        )

    }

}
export default Images;

// Images.propTypes = {
//     handleAddFavorite: PropTypes.func.isRequired,
// }
