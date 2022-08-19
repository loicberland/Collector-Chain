import { useSelector } from 'react-redux'
import CollectionCard from '../../card/CollectionCard'
import SearchBarCollections from '../../searchBars/SearchBarCollectionsByCategory'
import './styles.scss'

const Collection = () => {
  
    const list = useSelector(state => state.collections.list)

    return (
    <div className='collection'>
        <div className="collection__title">
            <div className="collection__title__image">Collection main image</div>
            <div className="collection__title__text">
                <div className='collection__title__text__main'>
                    <h1 >Collection title</h1>
                    <p>Collection short description</p>
                </div>
                <div className="collection__title__text__stats">
                    <div className="collection__title__text__stats__items">
                        <h3>items</h3>
                        <p>145</p>
                    </div>
                    <div className="collection__title__text__stats__owners">
                        <h3>owners</h3>
                        <p>98</p>
                    </div>
                    <div className="collection__title__text__stats__floorPrice">
                        <h3>Floor price</h3>
                        <p>0,94</p>
                    </div>
                </div>
            </div>
        </div>
        <SearchBarCollections/>
        <div className="collection__list">
        {/* display de la liste sous forme de carte */}
        {list.map((text) => {
          return (
            <CollectionCard key={text} text={text}/>
          )
        })}

      </div>
    </div>
  )
}

export default Collection