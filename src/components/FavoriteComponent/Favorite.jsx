import PropTypes from 'prop-types';

export function FavoriteImg({ img, handleDelete }) {
    return   <ul>
                        {img.map((item) => {
                            const { webformatURL, id, tags } = item; return <li key={id}> <img src={webformatURL} alt={tags} width="300" /> <button id={id} onClick={handleDelete}></button> </li>
                        })}
        
                    </ul>
    
}

FavoriteImg.propTypes = {
    img: PropTypes.arrayOf(
        PropTypes.shape({
            webformatURL:PropTypes.string.isRequired,
             id : PropTypes.number.isRequired,
             tags: PropTypes.string.isRequired,
}).isRequired

    ).isRequired,

     handleDelete: PropTypes.func.isRequired,
}
